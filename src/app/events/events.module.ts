import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventCollectionComponent } from './event-collection/event-collection.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsComponent } from './events.component';
import { ApiModule } from "../api/api.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../shared/shared.module";
import { EventCreateComponent } from './event-create/event-create.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    EventCollectionComponent,
    EventDetailComponent,
    EventsComponent,
    EventCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule,
    SharedModule,
    NgbModule,
    ApiModule
  ]
})
export class EventsModule {
}
