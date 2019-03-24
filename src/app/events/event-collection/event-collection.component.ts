import { Component, OnInit } from '@angular/core';
import { EventService } from "../event.service";
import { Observable } from "rxjs";
import { MicroEvent } from "../micro-event";
import { CollectionSearch } from "../../shared/collection-search/collection-search";
import { Profile } from "../../profiles/profile";
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-collection',
  templateUrl: './event-collection.component.html',
  styleUrls: ['./event-collection.component.scss']
})
export class EventCollectionComponent implements OnInit {

  events$: Observable<MicroEvent[]>;

  constructor(private _eventService: EventService, private _router: Router) { }

  ngOnInit() {
    this.events$ = this._eventService.findAll();
  }

  searchEvents(search: CollectionSearch): void {
    if (search.searchText && search.searchText.length > 0) {
      this.events$ = this._eventService.findAllByTitle(search.searchText);
    } else {
      this.events$ = this._eventService.findAll();
    }
  }

  showProfileDetails(profile: Profile): void {
    this._router.navigate(['profiles', profile.id]);
  }

}
