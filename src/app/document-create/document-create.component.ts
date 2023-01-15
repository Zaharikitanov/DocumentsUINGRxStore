import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Document } from '../document-list/documents.module';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngrx/store';
import { DocumentsActions } from '../state/documents.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent {

  documentName: string;
  version: number;
  fileName: string;
  fileSize: number;

  constructor(
    public toastr: ToastrService,
    private store: Store,
    public activeModal: NgbActiveModal
  ) { }

  createDocument(): void {
    if(this.checkStringInput(this.documentName) &&
      this.checkNumberInput(this.version) &&
      this.checkStringInput(this.fileName) &&
      this.checkNumberInput(this.fileSize) ){

        let newDocument: Document = {
          id: uuidv4(),
          documentName: this.documentName,
          version: this.version,
          fileName: this.fileName,
          fileSize: this.fileSize
        };
        
      this.store.dispatch(DocumentsActions.addDocument({ document: newDocument }));
        
    } else {
      this.toastr.warning("All fields are required");
    }    
    this.activeModal.close();
  }

  private checkStringInput(input: string): boolean {
    if(input !== undefined && input.length > 0){
      return true
    }
    return false;
  }

  private checkNumberInput(input: number): boolean {
    if(input !== undefined){
      return true;
    }
    return false;
  }
}
