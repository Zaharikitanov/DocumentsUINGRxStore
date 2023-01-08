import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Document } from '../document-list/documents.module';

@Component({
  selector: 'app-document-collection',
  templateUrl: './document-collection.component.html',
  styleUrls: ['./document-collection.component.scss']
})
export class DocumentCollectionComponent {
  @Input() documents: ReadonlyArray<Document> | any = [];
  @Output() remove = new EventEmitter<string>();
}
