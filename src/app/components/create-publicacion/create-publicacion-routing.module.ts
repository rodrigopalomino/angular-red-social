import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePublicacionComponent } from './create-publicacion/create-publicacion.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePublicacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePublicacionRoutingModule {}
