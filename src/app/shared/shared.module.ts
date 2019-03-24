import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { CollectionSearchComponent } from './collection-search/collection-search.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ProfilePictureComponent,
    CollectionSearchComponent
  ],
  exports: [
    ProfilePictureComponent,
    CollectionSearchComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    FormsModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    }
  }
}
