import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  countblog(): Promise<any> {
    return this.http.get(`${environment.base_URL}countblogs`).toPromise();
  }
  countactiveblog(): Promise<any> {
    return this.http.get(`${environment.base_URL}countactive`).toPromise();
  }
  countfeaturedblog(): Promise<any> {
    return this.http.get(`${environment.base_URL}countfeatured`).toPromise();
  }
  addblog(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}createblog`, model);
  }
  postFile(fileToUpload: File): Observable<any> {
    const endpoint = environment.base_URL + 'upload';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData)
      .pipe(map(i => { return i }));
  }
  getBlogById(id: number): Promise<any> {
    return this.http.get(`${environment.base_URL}getblogbyid/${id}`).toPromise();

  }
  getallblogs(): Promise<any> {
    return this.http.get(`${environment.base_URL}getblogs`).toPromise();
  }
    deleteBlogs(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deleteblogs/${id}`);
  }
  addcategory(model): Observable<any> {
    return this.http.post(`${environment.base_URL}addcat`, model);
  }
  getcategories(): Promise<any> {
    return this.http.get(`${environment.base_URL}getcategory`).toPromise();
  }
  updateblogs(model): Observable<any> {
    return this.http.put(`${environment.base_URL}updateblog`, model);
  }
}
