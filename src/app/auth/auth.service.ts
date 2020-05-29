import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorData: {};
  
  constructor(private http: HttpClient) {  }

  redirectUrl: string;
  getlogin(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}getUsers`, model);
  }

  isLoggedIn() {
    if (localStorage.getItem('islogin')) {
      return true;
    }
    return false;
  }

  // getAuthorizationToken() {
  //   const currentUser = JSON.parse(localStorage.getItem('islogin'));
  //   return currentUser;
  // }

  logout() {
    localStorage.removeItem('islogin');
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {

  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {

  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  //   }

  //   // return an observable with a user-facing error message
  //   this.errorData = {
  //     errorTitle: 'Oops! Request for document failed',
  //     errorDesc: 'Something bad happened. Please try again later.'
  //   };
  //   return throwError(this.errorData);
  // }

}
