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
      .get<Document[]>(
        'https://localhost:7153/api/Documents'
      )
      .pipe(map((documents) => documents || []));
  }
}