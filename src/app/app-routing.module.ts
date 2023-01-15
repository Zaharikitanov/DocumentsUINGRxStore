import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentCreateComponent } from './document-create/document-create.component';
import { DocumentListComponent } from './document-list/document-list.component';

const routes: Routes = [
  { path: '', component: DocumentListComponent },
  { path: 'document/create', component: DocumentCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
