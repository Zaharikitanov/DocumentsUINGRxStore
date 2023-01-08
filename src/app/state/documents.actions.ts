import { createActionGroup, props } from '@ngrx/store';
import { Document } from '../document-list/documents.module';
 
export const DocumentsActions = createActionGroup({
  source: 'Documents',
  events: {
    'Add Document': props<{ documentId: string }>(),
    'Remove Document': props<{ documentId: string }>(),
  },
});
 
export const DocumentsApiActions = createActionGroup({
  source: 'Documents API',
  events: {
    'Retrieved Documents List': props<{ documents: ReadonlyArray<Document> }>(),
  },
});