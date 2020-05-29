import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  constructor(private http: HttpClient) { }
  getfeaturedblog(): Promise<any> {
    return this.http.get(`${environment.base_URL}getfeaturedblog`).toPromise();
  }
  getactiveblog(): Promise<any> {
    return this.http.get(`${environment.base_URL}getactiveblog`).toPromise();
  }
}
