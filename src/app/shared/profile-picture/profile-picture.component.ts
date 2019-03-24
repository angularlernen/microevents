import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from "../../profiles/profile";

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent implements OnInit {

  @Input() profile: Profile;
  @Input() diameter = 100;
  @Input() borderWidth = 4;
  @Input() borderColor = 'white';
  @Input() outerBorderColor = 'gray';
  @Input() circle = true;
  @Output() profileClicked = new EventEmitter<Profile>();

  constructor() { }

  ngOnInit() {
  }

  get fullName(): string {
    return `${this.profile.firstName} ${this.profile.lastName}`;
  }

  get borderRadius(): number {
    if (!this.circle) {
      return 0;
    }

    return this.diameter / 2;
  }

  onProfilePictureClick(): void {
    this.profileClicked.emit(this.profile);
  }

  get innerDiameter(): number {
    return this.diameter - 2 * this.borderWidth;
  }

  get innerBorderRadius(): number {

    if (!this.circle) {
      return 0;
    }

    return this.innerDiameter / 2;
  }

}
