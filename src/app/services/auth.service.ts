import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  getAuthToken(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (token == undefined) {
      this.router.navigate(['/error-pages/tokenInvalido']);
      return of(false);
    }

    return of(true);
  }

  decodeToken(): { id: number; username: string } | null {
    const token: string | null = localStorage.getItem('token');

    if (token !== null) {
      const dToken: any = jwt(token);
      return dToken;
    }
    return null;
  }
}
