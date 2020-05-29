
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private service: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // if (this.service.isLoggedIn()) {
        //     const authToken = this.service.getAuthorizationToken();
        //     req = req.clone({
        //         setHeaders:
        //             { Authorization: authToken }
        //     }
        //     );
        // }

        return next.handle(req);
    }
}