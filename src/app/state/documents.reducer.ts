import { createReducer, on } from '@ngrx/store';
import { DocumentsActions, DocumentsApiActions } from './documents.actions';
import { Document } from '../document-list/documents.module';

export const initialState: ReadonlyArray<Document> = [];

export const documentsReducer = createReducer(
  initialState,
  on(DocumentsApiActions.retrievedDocumentsList, (_state, { documents }) => documents),
  on(DocumentsActions.removeDocument, (state, { id }) =>
    state.filter((document) => document.id !== id)
  ),
  on(DocumentsActions.addDocument, (state, { document }) => {
    if (state.indexOf(document) > -1) return state;
        
    return [...state, document];
  })
);