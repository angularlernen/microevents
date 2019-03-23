import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

interface RouterParams {
  id: string;
}

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  profileId?: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: RouterParams) => {
      this.profileId = params.id;
    });
  }

}
