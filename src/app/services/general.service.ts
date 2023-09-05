import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { General } from '../interfaces/general';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    // this.myAppUrl = 'https://nodejs-red-social-production.up.railway.app/';
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = 'general';
  }

  getGeneral(): Observable<General[]> {
    return this.http.get<General[]>(`${this.myAppUrl}${this.myApiUrl}/`);
  }

  createGeneral(general: General): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/create`, general);
  }
}
