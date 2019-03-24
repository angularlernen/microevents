import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './profiles.component';
import { ProfileCollectionComponent } from './profile-collection/profile-collection.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ProfilesComponent,
    ProfileCollectionComponent,
    ProfileDetailComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    SharedModule
  ]
})
export class ProfilesModule { }
