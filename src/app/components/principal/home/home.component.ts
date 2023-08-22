import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  username: string = '';
  user_id: number = 0;

  constructor(
    private _authServices: AuthService,
    private router: Router,
    private location: Location
  ) {
    this.decodeToken();
  }

  decodeToken() {
    const dToken = this._authServices.decodeToken();
    this.username = dToken?.username || '';
    this.user_id = dToken?.id || 0;
  }

  createPost() {
    this.router.navigateByUrl('/post');
  }

  CerrarSesion() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
