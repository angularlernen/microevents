import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { EventResource } from "./event/event.resource";
import { ProfileResource } from "./profile/profile.resource";
import { API_BASE_PATH } from "./api-base-path.token";
import { MeResource } from "./me/me.resource";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
})
export class ApiModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        EventResource,
        ProfileResource,
        MeResource,
        {
          provide: API_BASE_PATH,
          useValue: 'http://localhost:3000'
        }
      ]
    }
  }
}
