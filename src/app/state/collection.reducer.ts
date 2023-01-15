import { createReducer, on } from '@ngrx/store';
import { DocumentsActions } from './documents.actions';
 
export const initialState: ReadonlyArray<string> = [];
 
export const collectionReducer = createReducer(
  initialState,
  on(DocumentsActions.removeDocument, (state, { id }) =>
    state.filter((id) => id !== id)
  ),
  // on(DocumentsActions.addDocument, (state, { document }) => {
  //   if (state.indexOf(document) > -1) return state;
 
  //   return [...state, document];
  // })
);