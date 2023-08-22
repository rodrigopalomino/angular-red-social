import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

import { Like } from 'src/app/interfaces/Like';
import { Publicacion } from 'src/app/interfaces/publicacionInterfaces';
import { AuthService } from 'src/app/services/auth.service';
import { LikeService } from 'src/app/services/like.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-sidebar-publicaciones',
  templateUrl: './sidebar-publicaciones.component.html',
  styleUrls: ['./sidebar-publicaciones.component.css'],
})
export class SidebarPublicacionesComponent implements OnInit {
  publicaciones: Publicacion[] = [];
  likes: Like[] = [];
  dislikes: Like[] = [];
  user_id?: number;

  constructor(
    private _publicacionServices: PublicacionService,
    private _authServices: AuthService,
    private _LikeServices: LikeService
  ) {
    this.decodeToken();
    this.getPost();
    this.getLikes();
    this.getDislikes();
  }

  ngOnInit(): void {}

  getLikes() {
    const get = this._LikeServices
      .getLikes(this.user_id || 0)
      .subscribe((data) => {
        this.likes = data.item;
      });
  }

  getDislikes() {
    const get = this._LikeServices
      .getDislikes(this.user_id || 0)
      .subscribe((data) => {
        this.dislikes = data.item;
      });
  }

  isLiked(postId: number): boolean {
    return this.likes.some((like) => like.post_id === postId);
  }

  isDisliked(postId: number): boolean {
    return this.dislikes.some((dislike) => dislike.post_id === postId);
  }

  getPost() {
    this._publicacionServices.getPublicaciones().subscribe((data) => {
      this.publicaciones = data.items;

      this.publicaciones.forEach((publicacion) => {
        const fecha = parseISO(publicacion.createdAt || 'a');
        publicacion.createdAt = format(fecha, 'yyyy-MM-dd');
      });

      console.log(this.publicaciones);
      console.log('dasd : ', this.publicaciones[0].usuario);
    });
  }

  postId(postId: number | undefined) {
    this._publicacionServices.disparadorPostId.emit({
      data: this.publicaciones[(postId || 0) - 1],
    });

    this._publicacionServices.pasarID.emit({
      post_id: postId,
    });
  }

  decodeToken() {
    const dtoken = this._authServices.decodeToken();
    this.user_id = dtoken?.id;
  }

  incrementLike(post_id: number) {
    console.log('user_id: ', this.user_id);
    console.log('post_id: ', post_id);

    const like: Like = {
      user_id: this.user_id || 0,
      post_id,
    };

    this._LikeServices.createLike(like).subscribe({
      next: (res: any) => {
        console.log(res);

        this.getPost();
        this.getLikes();
        this.getDislikes();
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });

    console.log('=======================');
  }

  incrementdisLike(post_id: number) {
    const like: Like = {
      user_id: this.user_id || 0,
      post_id,
    };

    this._LikeServices.createdisLike(like).subscribe({
      next: (res: any) => {
        this.getPost();
        this.getLikes();
        this.getDislikes();
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }
}

//http://localhost:4200/publicaciones?pageContent=page-publicaciones
//http://localhost:4200/publicaciones(pageContent:page-publicaciones)
