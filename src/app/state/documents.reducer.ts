import { createReducer, on } from '@ngrx/store';
import { DocumentsApiActions } from './documents.actions';
import { Document } from '../document-list/documents.module';

export const initialState: ReadonlyArray<Document> = [];

export const documentsReducer = createReducer(
  initialState,
  on(DocumentsApiActions.retrievedDocumentsList, (_state, { documents }) => documents)
);