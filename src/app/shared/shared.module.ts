import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { NgbTooltip, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    ProfilePictureComponent
  ],
  exports: [
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
