import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {

  @Input() tooltip = 'click me';
  @Output() fabClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  buttonClicked(): void {
    this.fabClicked.emit();
  }

}
