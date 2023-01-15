import { createActionGroup, props } from '@ngrx/store';
import { Document } from '../document-list/documents.module';
 
export const DocumentsActions = createActionGroup({
  source: 'Documents',
  events: {
    'Add Document': props<{ document: Document }>(),
    'Remove Document': props<{ id: string }>(),
  },
});
 
export const DocumentsApiActions = createActionGroup({
  source: 'Documents API',
  events: {
    'Retrieved Documents List': props<{ documents: ReadonlyArray<Document> }>(),
  },
});