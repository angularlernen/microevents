import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventCollectionComponent } from './event-collection/event-collection.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsComponent } from './events.component';

@NgModule({
  declarations: [
    EventCollectionComponent,
    EventDetailComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule {
}
