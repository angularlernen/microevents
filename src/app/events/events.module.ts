import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventCollectionComponent } from './event-collection/event-collection.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsComponent } from './events.component';
import { ApiModule } from "../api/api.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    EventCollectionComponent,
    EventDetailComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    NgbModule,
    ApiModule
  ]
})
export class EventsModule {
}
