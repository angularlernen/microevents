import { Inject, Injectable } from '@angular/core';
import { API_BASE_PATH } from "../api-base-path.token";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MeResponse } from "./me.response";

@Injectable()
export class MeResource {

  static readonly RESOURCE_ME = '/me';

  constructor(
    @Inject(API_BASE_PATH) private _apiBasePath: string,
    private _http: HttpClient) {
  }

  me(): Observable<MeResponse> {
    return this._http.get<MeResponse>(`${this._apiBasePath}${MeResource.RESOURCE_ME}`);
  }
}
