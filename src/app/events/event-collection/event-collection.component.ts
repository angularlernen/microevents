import { Component, OnInit } from '@angular/core';
import { EventService } from "../event.service";
import { Observable } from "rxjs";
import { MicroEvent } from "../micro-event";
import { CollectionSearch } from "../../shared/collection-search/collection-search";

@Component({
  selector: 'app-event-collection',
  templateUrl: './event-collection.component.html',
  styleUrls: ['./event-collection.component.scss']
})
export class EventCollectionComponent implements OnInit {

  events$: Observable<MicroEvent[]>;

  constructor(private _eventService: EventService) { }

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

}
