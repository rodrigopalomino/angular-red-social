import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form!: FormGroup;
  userError: string = '';
  passwordError: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userServices: UserService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const usuario = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
    };

    this._userServices.login(usuario.username, usuario.password).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      error: (e: HttpErrorResponse) => {
        this.userError = e.error.username;
        this.passwordError = e.error.password;
      },
    });
  }
}
