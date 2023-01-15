import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { collectionReducer } from './state/collection.reducer';
import { documentsReducer } from './state/documents.reducer';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentCreateComponent } from './document-create/document-create.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent, 
    DocumentListComponent, 
    DocumentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
      StoreModule.forRoot({ documents: documentsReducer, collection: collectionReducer }),
      HttpClientModule,
      ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
