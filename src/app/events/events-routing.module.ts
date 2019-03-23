import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from "./events.component";
import { EventCollectionComponent } from "./event-collection/event-collection.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: EventCollectionComponent
      },
      {
        path: ':id',
        component: EventDetailComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
