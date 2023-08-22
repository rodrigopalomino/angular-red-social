import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/userInterfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in2',
  templateUrl: './sign-in2.component.html',
  styleUrls: ['./sign-in2.component.css'],
})
export class SignIn2Component implements OnInit {
  form!: FormGroup;
  error: string = '';
  expreciones = {
    username: /^[a-zA-Z]{4,16}$/,
    password: /^.{4,16}$/,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userServices: UserService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    const name = localStorage.getItem('name');
    const lastname = localStorage.getItem('lastname');
    const f_nacimiento = localStorage.getItem('f_nacimiento');

    if (!name || !lastname || !f_nacimiento) {
      this.router.navigate(['/signIn/signIn1']);
    }
  }

  createForm() {
    this.form = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern(this.expreciones.username)],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(this.expreciones.password)],
      ],
      password2: [
        '',
        [Validators.required, Validators.pattern(this.expreciones.password)],
      ],
    });

    this.form
      .get('password2')
      ?.setValidators([Validators.required, this.validPasswords.bind(this)]);
  }

  validPasswords(control: AbstractControl): { [key: string]: Boolean } | null {
    const password = this.form.get('password')?.value;
    const password2 = control.value;

    if (password2 !== password) {
      return { passwordsMismatch: true };
    }

    return null;
  }

  get usernameValid() {
    const campo = this.form.get('username');

    if (campo?.touched && campo.value == '') {
      return 'este campo es requerido';
    }

    if (campo?.value != '' && !this.expreciones.username.test(campo?.value)) {
      return 'este campo debe tener de 4 a 16 caracteres';
    }

    return '';
  }

  get passwordValid() {
    const campo = this.form.get('password');

    if (campo?.touched && campo.value == '') {
      return 'este campo es requerido';
    }

    if (campo?.value != '' && !this.expreciones.password.test(campo?.value)) {
      return 'este campo debe tener de 4 a 16 caracteres';
    }

    return '';
  }

  get password2Valid() {
    const password = this.form.get('password');
    const password2 = this.form.get('password2');

    if (password?.touched && password.value == '') {
      return 'este campo es requerido';
    }

    if (password2?.value != '' && password2?.value !== password?.value) {
      return 'los passwords deben ser iguales';
    }

    return '';
  }

  submit() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        control.markAllAsTouched();
        console.log(this.form);
      });
      return;
    }

    if (this.form.get('password2')?.value == '') {
      console.log('aca');
      return;
    }

    if (this.form.get('pasword2')?.value !== this.form.get('pasword')?.value) {
      this.form.get('password2')?.markAllAsTouched();
      return;
    }

    const usuario: Usuario = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
      name: localStorage.getItem('name') || '',
      lastname: localStorage.getItem('lastname') || '',
      f_nacimiento: new Date(localStorage.getItem('f_nacimiento') || ''),
    };

    this._userServices.signIn(usuario).subscribe({
      next: (res) => {
        console.log('usuario agregado a la base de datos');
        localStorage.removeItem('name');
        localStorage.removeItem('lastname');
        localStorage.removeItem('f_nacimiento');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        console.log('error');
        console.log(e);
        this.error = e.error.msg;
      },
    });
  }

  regresar() {
    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
    localStorage.removeItem('f_nacimiento');
    this.router.navigateByUrl('/login');
  }

  resetError(event: Event) {
    this.error = '';
    console.log('reset');
  }
}
