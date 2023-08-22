import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../interfaces/publicacionInterfaces';
import { Like } from '../interfaces/Like';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  @Output() disparadorPostId: EventEmitter<any> = new EventEmitter();
  @Output() pasarID: EventEmitter<any> = new EventEmitter();

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://nodejs-red-social-production.up.railway.app/';
    // this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = 'post';
  }

  getPublicaciones(): Observable<{ items: Publicacion[]; status: number }> {
    return this.http.get<{ items: Publicacion[]; status: number }>(
      `${this.myAppUrl}${this.myApiUrl}`
    );
  }

  createPublicacion(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.post<Publicacion>(
      `${this.myAppUrl}${this.myApiUrl}/create`,
      publicacion
    );
  }
}
