import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TokenInvalidoComponent } from './token-invalido/token-invalido.component';

const routes: Routes = [
  {
    path: 'notFound',
    component: NotFoundComponent,
  },
  {
    path: 'tokenInvalido',
    component: TokenInvalidoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErroresRoutingModule {}
