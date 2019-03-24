import { Component, OnInit } from '@angular/core';
import { CollectionSearch } from "../../shared/collection-search/collection-search";
import { Observable } from "rxjs";
import { Profile } from "../profile";
import { ProfileService } from "../profile.service";

@Component({
  selector: 'app-profile-collection',
  templateUrl: './profile-collection.component.html',
  styleUrls: ['./profile-collection.component.scss']
})
export class ProfileCollectionComponent implements OnInit {

  profiles$?: Observable<Profile[]>;

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this.profiles$ = this._profileService.findAll();
  }

  searchProfiles(search: CollectionSearch): void {
    if (search.searchText && search.searchText.length > 0) {
      this.profiles$ = this._profileService.findAllByName(search.searchText);
    } else {
      this.profiles$ = this._profileService.findAll();
    }
  }

}
