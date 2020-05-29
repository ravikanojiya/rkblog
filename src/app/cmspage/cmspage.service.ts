import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmspageService {

  // private http: HttpClient;

  constructor(private http: HttpClient) { }
  sendemail(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}send`, model);
  }
}
