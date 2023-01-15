import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Document } from '../document-list/documents.module';

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
    private router: Router
  ) { }

  createDocument(): void {
    if(this.checkStringInput(this.documentName) &&
      this.checkNumberInput(this.version) &&
      this.checkStringInput(this.fileName) &&
      this.checkNumberInput(this.fileSize) ){

        let newDocument: Document = {
          documentName: this.documentName,
          version: this.version,
          fileName: this.fileName,
          fileSize: this.fileSize
        };
        
      //   this.service.createDocument(newDocument)
      //   .subscribe((result) => {
      //     this.router.navigateByUrl('/');
      //   }, err => {
      //     console.log(err);
      // });
        
    } else {
      // this.toastr.warning("All fields are required");
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
