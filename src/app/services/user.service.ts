import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/userInterfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/';
    // this.myAppUrl = 'https://nodejs-red-social-production.up.railway.app/';
    this.myApiUrl = 'user';
  }

  signIn(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/signIn`, usuario);
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/login`, body);
  }
}
