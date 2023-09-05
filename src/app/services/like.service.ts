import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../interfaces/Like';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    // this.myAppUrl = 'https://nodejs-red-social-production.up.railway.app/';
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = 'like';
  }

  getLikes(user_id: number): Observable<Like[]> {
    return this.http.get<Like[]>(
      `${this.myAppUrl}${this.myApiUrl}/like/${user_id}`
    );
  }

  getDislikes(user_id: number): Observable<Like[]> {
    return this.http.get<Like[]>(
      `${this.myAppUrl}${this.myApiUrl}/dislike/${user_id}`
    );
  }

  createLike(like: Like): Observable<string> {
    return this.http.post<string>(
      `${this.myAppUrl}${this.myApiUrl}/createLike`,
      like
    );
  }

  createdisLike(like: Like): Observable<string> {
    return this.http.post<string>(
      `${this.myAppUrl}${this.myApiUrl}/createdisLike`,
      like
    );
  }
}
