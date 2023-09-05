import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { General } from 'src/app/interfaces/general';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-page-general',
  templateUrl: './page-general.component.html',
  styleUrls: ['./page-general.component.css'],
})
export class PageGeneralComponent implements OnInit {
  @ViewChild('mensajesContainer') mensajesContainer?: ElementRef;

  mensajes?: General[];
  user_id?: number;
  form!: FormGroup;

  constructor(
    private _generalServices: GeneralService,
    private _authServices: AuthService,
    private fb: FormBuilder
  ) {
    this.decodeToken();
    this.createForm();
  }

  ngOnInit(): void {
    this.getGeneral();

    setInterval(() => {
      this.getGeneral(), 10000;
    });
  }

  getGeneral() {
    this._generalServices.getGeneral().subscribe((data) => {
      this.mensajes = data;
      // console.log(this.mensajes);
    });
  }

  decodeToken() {
    const dToken = this._authServices.decodeToken();
    this.user_id = dToken?.id || 0;
    console.log('user_id: ', this.user_id);
  }

  createForm() {
    this.form = this.fb.group({
      mensaje: ['', [Validators.required]],
    });
  }

  createGeneral() {
    if (this.form.invalid) {
      console.log('agrega comentario');
      return;
    }

    const mensaje: General = {
      user_id: this.user_id || 0,
      contenido: this.form.get('mensaje')?.value,
    };

    this._generalServices.createGeneral(mensaje).subscribe({
      next: (res: any) => {
        console.log(res);
        console.log('mensaje creado');
        this.getGeneral();
        setTimeout(() => {
          this.scrollToBottom();
        });
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }

  scrollToBottom() {
    if (this.mensajesContainer && this.mensajesContainer.nativeElement) {
      const container = this.mensajesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
      console.log('aca');
    }
  }
}
