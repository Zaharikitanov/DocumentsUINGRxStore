import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Document } from './documents.module';
 
@Injectable({ providedIn: 'root' })
export class DocumentsService {
  constructor(private http: HttpClient) {}
 
  getDocuments(): Observable<Array<Document>> {
    return this.http
      .get<{ items: Document[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((documents) => documents.items || []));
  }
}