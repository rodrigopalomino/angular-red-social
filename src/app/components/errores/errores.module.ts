import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErroresRoutingModule } from './errores-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TokenInvalidoComponent } from './token-invalido/token-invalido.component';

@NgModule({
  declarations: [NotFoundComponent, TokenInvalidoComponent],
  imports: [CommonModule, ErroresRoutingModule],
})
export class ErroresModule {}
