import { Injectable } from '@angular/core';
import { EventResource } from "../api/event/event.resource";
import { from, Observable, zip } from "rxjs";
import { map, mergeMap, toArray } from "rxjs/operators";
import { MicroEvent } from "./micro-event";
import { Profile } from "../profiles/profile";
import { ProfileService } from "../profiles/profile.service";
import { EventResponse } from "../api/event/event.response";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _eventResource: EventResource, private _profileService: ProfileService) { }

  findAll(): Observable<MicroEvent[]> {

    const eventResponse$ = this._eventResource.findAll().pipe(
      mergeMap((eventResponses: EventResponse[]) => from(eventResponses))
    );

    return this._toMicroEvent(eventResponse$).pipe(
      toArray()
    );
  }

  findById(id: number): Observable<MicroEvent> {
    return this._toMicroEvent(this._eventResource.findById(id));
  }

  findAllByTitle(title: string): Observable<MicroEvent[]> {

    const eventResponse$ = this._eventResource.findAllByTitle(title).pipe(
      mergeMap((eventResponses: EventResponse[]) => from(eventResponses))
    );

    return this._toMicroEvent(eventResponse$).pipe(
      toArray()
    );
  }

  private _toMicroEvent(eventResponse$: Observable<EventResponse>): Observable<MicroEvent> {
    return eventResponse$.pipe(
      mergeMap((eventResponse: EventResponse) => {
        const participantsObservables: Observable<Profile>[] = eventResponse.participantIds.map(participantId => this._profileService.findById(participantId));

        return zip(...participantsObservables).pipe(
          map((participants: Profile[]) => {
            return {
              ...eventResponse,
              participants,
              eventDate: EventService.parseIsoDatetime(eventResponse.eventDate)
            } as MicroEvent;
          })
        );
      }), // Observable<MicroEvent>
    );
  }

  private static parseIsoDatetime(dtstr: string): Date {
    const dt = dtstr.split(/[: T-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
  }
}
