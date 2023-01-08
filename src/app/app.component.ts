import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDocumentCollection, selectDocuments } from './state/documents.selectors';
import { DocumentsActions, DocumentsApiActions } from './state/documents.actions';
import { DocumentsService } from './document-list/documents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DocumentsUIRxStore';
  documents$ = this.store.select(selectDocuments);
  documentCollection$ = this.store.select(selectDocumentCollection);
 
  onAdd(documentId: string) {
    this.store.dispatch(DocumentsActions.addDocument({ documentId }));
  }
 
  onRemove(documentId: string) {
    this.store.dispatch(DocumentsActions.removeDocument({ documentId }));
  }
 
  constructor(private documentsService: DocumentsService, private store: Store) {}
 
  ngOnInit() {
    this.documentsService
      .getDocuments()
      .subscribe((documents) =>
        this.store.dispatch(DocumentsApiActions.retrievedDocumentsList({ documents }))
      );
  }
}
