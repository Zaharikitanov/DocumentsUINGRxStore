import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDocumentCollection, selectDocuments } from './state/documents.selectors';
// import { DocumentsActions, DocumentsApiActions } from './state/documents.actions';
import { DocumentsService } from './document-list/documents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DocumentsUIRxStore';
  
}
