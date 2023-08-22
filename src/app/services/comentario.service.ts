import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/Comentario';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://nodejs-red-social-production.up.railway.app/';
    // this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = 'coment';
  }

  getCometarios(
    post_id: string
  ): Observable<{ comentarios: Comentario[]; status: number }> {
    return this.http.get<{ comentarios: Comentario[]; status: number }>(
      `${this.myAppUrl}${this.myApiUrl}/${post_id}`
    );
  }

  createComent(
    comentario: Comentario
  ): Observable<{ msg: string; status: number }> {
    return this.http.post<{ msg: string; status: number }>(
      `${this.myAppUrl}${this.myApiUrl}/create`,
      comentario
    );
  }
}
