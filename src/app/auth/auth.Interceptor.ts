import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('111111' + localStorage.getItem('token'));

    if (
      localStorage.getItem('token') !== null &&
      localStorage.getItem('token') !== ''
    ) {
      const reqWithHeader = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        )
      });

      return next.handle(reqWithHeader).pipe(
        tap(
          succ => {},
          err => {
            if (err.status === 401) {
              localStorage.removeItem('token'); // localStorage.removeItem('token');
              this.router.navigateByUrl('/login');
            }
          }
        )
      );
    } else {
      return next.handle(req.clone());
    }
  }
}
