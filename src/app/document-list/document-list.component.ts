import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Document } from './documents.module';
import { Store } from '@ngrx/store';
import { selectDocumentCollection, selectDocuments } from '../state/documents.selectors';
import { DocumentsActions, DocumentsApiActions } from '../state/documents.actions';
import { DocumentsService } from '../document-list/documents.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  documents$ = this.store.select(selectDocuments);
  documentCollection$ = this.store.select(selectDocumentCollection);
 
  // onAdd(documentTest: Event) {
  //   console.log(documentTest.target);
    
  //   let documentId = "";
  //   this.store.dispatch(DocumentsActions.addDocument({ documentId }));
  // }
 
  // onRemove(documentId: string) {
  //   this.store.dispatch(DocumentsActions.removeDocument({ documentId }));
  // }
 
  constructor(private documentsService: DocumentsService, private store: Store) {}
 
  ngOnInit() {    
    this.documentsService
      .getDocuments()
      .subscribe((documents) =>
        this.store.dispatch(DocumentsApiActions.retrievedDocumentsList({documents}))
      );      
      console.log(this.documents$);
  }
}
