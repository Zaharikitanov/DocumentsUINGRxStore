import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDocuments } from '../state/documents.selectors';
import { DocumentsActions, DocumentsApiActions } from '../state/documents.actions';
import { DocumentsService } from '../document-list/documents.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentCreateComponent } from '../document-create/document-create.component';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {

  constructor(
    private documentsService: DocumentsService, 
    private store: Store,
    private modalService: NgbModal
    ) {}

  documents$ = this.store.select(selectDocuments);

  ngOnInit() {    
    this.documentsService
      .getDocuments()
      .subscribe((documents) =>
        this.store.dispatch(DocumentsApiActions.retrievedDocumentsList({documents}))
      );
  }

  addNewDocument(){
		const modalRef = this.modalService.open(DocumentCreateComponent);
		modalRef.componentInstance.name = 'World';
	}
 
  removeDocument(id: string) {    
    this.store.dispatch(DocumentsActions.removeDocument({ id }));
  }
}
