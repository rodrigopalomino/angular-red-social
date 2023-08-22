import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignIn1Component } from './sign-in1/sign-in1.component';
import { SignIn2Component } from './sign-in2/sign-in2.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignIn1Component, SignIn2Component],
  imports: [CommonModule, SignInRoutingModule, ReactiveFormsModule],
})
export class SignInModule {}
