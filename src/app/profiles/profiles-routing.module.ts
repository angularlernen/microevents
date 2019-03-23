import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from "./profiles.component";
import { ProfileCollectionComponent } from "./profile-collection/profile-collection.component";
import { ProfileDetailComponent } from "./profile-detail/profile-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProfileCollectionComponent
      },
      {
        path: ':id',
        component: ProfileDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
