import { Injectable } from '@angular/core';
import { ProfileResource } from "../api/profile/profile.resource";
import { concat, Observable } from "rxjs";
import { ProfileResponse } from "../api/profile/profile.response";
import { Profile } from "./profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _profileResource: ProfileResource) { }

  findAll(): Observable<Profile[]> {
    return this._profileResource.findAll();
  }

  findById(id: number): Observable<Profile> {
    return this._profileResource.findById(id);
  }

  findAllByName(name: string): Observable<Profile[]> {
    return concat(
      this._profileResource.findAllByFirstName(name),
      this._profileResource.findAllByLastName(name)
    );
  }

}
