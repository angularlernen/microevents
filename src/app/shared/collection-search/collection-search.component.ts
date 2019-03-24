import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CollectionSearch } from "./collection-search";

@Component({
  selector: 'app-collection-search',
  templateUrl: './collection-search.component.html',
  styleUrls: ['./collection-search.component.scss']
})
export class CollectionSearchComponent {

  @Input() collectionId: string;
  searchText = '';

  @Input() labelText = 'Type your keyword here...:';
  @Input() buttonLabelText = 'Search';

  @Output() collectionSearch = new EventEmitter<CollectionSearch>();

  constructor() { }

  searchClicked(): void {
    this.collectionSearch.emit({
      collectionId: this.collectionId,
      searchText: this.searchText,
      triggeredAt: new Date()
    });
  }

}
