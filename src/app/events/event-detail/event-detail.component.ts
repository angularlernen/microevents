import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

interface RouterParams {
  id: string;
}

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  eventId?: string;

  constructor(private _router: ActivatedRoute) { }

  ngOnInit() {
    this._router.params.subscribe((params: RouterParams) => {
      this.eventId = params.id;
    });
  }

}
