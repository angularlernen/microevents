import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'events',
    loadChildren: './events/events.module#EventsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/events'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
