import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePublicacionRoutingModule } from './create-publicacion-routing.module';
import { CreatePublicacionComponent } from './create-publicacion/create-publicacion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreatePublicacionComponent],
  imports: [CommonModule, CreatePublicacionRoutingModule, ReactiveFormsModule],
})
export class CreatePublicacionModule {}
