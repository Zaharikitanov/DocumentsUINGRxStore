import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Document } from '../document-list/documents.module';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngrx/store';
import { DocumentsActions } from '../state/documents.actions';

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
    // private service: DocumentsService,
    public toastr: ToastrService,
    private router: Router,
    private store: Store
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
      // this.router.navigateByUrl('/');
        
    } else {
      this.toastr.warning("All fields are required");
    }    
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
