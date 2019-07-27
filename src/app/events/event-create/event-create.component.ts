import { Component, OnInit } from '@angular/core';
import { CreateEventRequest } from "../../api/event/create-event.request";
import { EventService } from "../event.service";
import { Observable } from "rxjs";
import { MicroEvent } from "../micro-event";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  constructor(private _eventService: EventService) { }

  ngOnInit() {
  }

  createEvent(eventData: CreateEventRequest): void {
    this._eventService.createEvent(eventData).subscribe();
  }

}
