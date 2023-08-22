import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/interfaces/publicacionInterfaces';
import { AuthService } from 'src/app/services/auth.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-create-publicacion',
  templateUrl: './create-publicacion.component.html',
  styleUrls: ['./create-publicacion.component.css'],
})
export class CreatePublicacionComponent {
  form!: FormGroup;
  user_id?: number;

  constructor(
    private fb: FormBuilder,
    private _publicacionServices: PublicacionService,
    private _authServices: AuthService,
    private router: Router
  ) {
    this.decodeToken();
    this.createForm();
  }

  decodeToken() {
    const dtoken = this._authServices.decodeToken();
    this.user_id = dtoken?.id;
  }

  createForm() {
    this.form = this.fb.group({
      titulo: ['', [Validators.required]],
      contenido: ['', [Validators.required]],
    });
  }

  submit() {
    const publicacion: Publicacion = {
      user_id: this.user_id || 0,
      titulo: this.form.get('titulo')?.value,
      contenido: this.form.get('contenido')?.value,
    };

    this._publicacionServices.createPublicacion(publicacion).subscribe({
      next: (res: any) => {
        console.log('todo bien');
        console.log(res);
        this.router.navigateByUrl(
          '/publicaciones(pageContent:page-publicaciones)'
        );
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }

  volver() {
    this.router.navigateByUrl('/publicaciones(pageContent:page-publicaciones)');
  }
}
