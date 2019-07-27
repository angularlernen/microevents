import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


import { Observable } from 'rxjs';
import { MicroEvent } from "../micro-event";
import { EventService } from "../event.service";

interface RouterParams {
  id: number;
}

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  event$: Observable<MicroEvent>;

  constructor(private _route: ActivatedRoute,
              private _microEventService: EventService) { }

  ngOnInit() {
    this._route.params.subscribe((params: RouterParams) => {
      this.event$ = this._microEventService.findById(params.id);
    });
  }

}
