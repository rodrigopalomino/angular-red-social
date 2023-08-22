import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './utils/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard], // Aplicar el guard solo a la ruta "/"
    loadChildren: () =>
      import('./components/principal/principal.module').then(
        (m) => m.PrincipalModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signIn',
    loadChildren: () =>
      import('./components/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./components/create-publicacion/create-publicacion.module').then(
        (m) => m.CreatePublicacionModule
      ),
  },
  {
    path: 'error-pages',
    loadChildren: () =>
      import('./components/errores/errores.module').then(
        (m) => m.ErroresModule
      ),
  },
  {
    path: '**',
    redirectTo: 'error-pages/notFound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
