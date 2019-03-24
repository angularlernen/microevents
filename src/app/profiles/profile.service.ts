import { Injectable } from '@angular/core';
import { ProfileResource } from "../api/profile/profile.resource";
import { concat, merge, Observable, zip } from "rxjs";
import { Profile } from "./profile";
import { reduce } from "rxjs/operators";

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
    ).pipe(
      // bug: remove duplicates
      reduce((acc, value) => [ ...acc, ...(value.filter(v => acc.indexOf(v) < 0))], [])
    );
  }

}
