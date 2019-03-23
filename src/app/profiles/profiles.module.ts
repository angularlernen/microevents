import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './profiles.component';
import { ProfileCollectionComponent } from './profile-collection/profile-collection.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

@NgModule({
  declarations: [
    ProfilesComponent,
    ProfileCollectionComponent,
    ProfileDetailComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule
  ]
})
export class ProfilesModule { }
