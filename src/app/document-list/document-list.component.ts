import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Document } from './documents.module';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  @Input() documents: ReadonlyArray<Document> = [];
  @Output() remove = new EventEmitter<string>();
}
