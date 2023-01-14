import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { documentsReducer } from './state/documents.reducer';
import { collectionReducer } from './state/collection.reducer';
import { DocumentListComponent } from './document-list/document-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
      StoreModule.forRoot({ documents: documentsReducer, collection: collectionReducer }),
      HttpClientModule,
  ],
  providers: [],
  declarations: [AppComponent, DocumentListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
