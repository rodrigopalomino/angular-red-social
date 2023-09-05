import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/interfaces/Comentario';
import { AuthService } from 'src/app/services/auth.service';
import { ComentarioService } from 'src/app/services/comentario.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-page-publicaciones',
  templateUrl: './page-publicaciones.component.html',
  styleUrls: ['./page-publicaciones.component.css'],
})
export class PagePublicacionesComponent implements OnInit {
  publicacion: any = '';
  comentarios: any = '';
  vC: boolean = false;
  Bcomentarios: boolean = false;
  form!: FormGroup;
  user_id: number = 0;
  post_id: number = 0;

  constructor(
    private _publicacionServices: PublicacionService,
    private _comentarioServices: ComentarioService,
    private _authServices: AuthService,
    private fb: FormBuilder
  ) {
    this.createForm();
    this.decodeToken();
  }

  ngOnInit(): void {
    this.getPublicacion();
  }

  decodeToken() {
    const dToken = this._authServices.decodeToken();
    this.user_id = dToken?.id || 0;
    console.log('user_id: ', this.user_id);
  }

  createForm() {
    this.form = this.fb.group({
      comentario: ['', [Validators.required]],
    });
  }

  agregarComentario() {
    if (this.form.invalid) {
      console.log('agregar comentario');
      return;
    }

    const comentario: Comentario = {
      post_id: this.post_id,
      user_id: this.user_id,
      contenido: this.form.get('comentario')?.value,
    };

    this._comentarioServices.createComent(comentario).subscribe({
      next: (res: any) => {
        console.log(res);

        this.verComentarios(this.post_id.toString());
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }

  getPublicacion() {
    this._publicacionServices.disparadorPostId.subscribe((data) => {
      this.publicacion = data.data;

      this.post_id = data.data.post_id;

      this.vC = false;
      this.Bcomentarios = false;
    });
  }

  verComentarios(post_id: string) {
    this._comentarioServices.getCometarios(post_id).subscribe((data) => {
      this.comentarios = data;
      this.Bcomentarios = true;
    });

    this.vC = true;
  }
}
