import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProfileResponse } from "./profile.response";
import { API_BASE_PATH } from "../api-base-path.token";

@Injectable()
export class ProfileResource {

  static readonly RESOURCE_PROFILES = '/profiles';

  constructor(
    @Inject(API_BASE_PATH) private _apiBasePath: string,
    private _http: HttpClient) {
  }

  findAll(): Observable<ProfileResponse[]> {
    return this._http.get<ProfileResponse[]>(`${this._apiBasePath}${ProfileResource.RESOURCE_PROFILES}`);
  }

  findById(id: number): Observable<ProfileResponse> {
    return this._http.get<ProfileResponse>(`${this._apiBasePath}${ProfileResource.RESOURCE_PROFILES}/${id}`);
  }

  findAllByFirstName(firstName: string): Observable<ProfileResponse[]> {
    return this._http.get<ProfileResponse[]>(`${this._apiBasePath}${ProfileResource.RESOURCE_PROFILES}?firstName_like=^${firstName}`);
  }

  findAllByLastName(lastName: string): Observable<ProfileResponse[]> {
    return this._http.get<ProfileResponse[]>(`${this._apiBasePath}${ProfileResource.RESOURCE_PROFILES}?lastName_like=^${lastName}`);
  }
}
