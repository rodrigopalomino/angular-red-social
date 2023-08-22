import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignIn1Component } from './sign-in1/sign-in1.component';
import { SignIn2Component } from './sign-in2/sign-in2.component';

const routes: Routes = [
  {
    path: 'signIn1',
    component: SignIn1Component,
  },
  {
    path: 'signIn2',
    component: SignIn2Component,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInRoutingModule {}
