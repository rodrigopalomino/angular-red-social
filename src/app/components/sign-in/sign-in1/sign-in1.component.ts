import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in1',
  templateUrl: './sign-in1.component.html',
  styleUrls: ['./sign-in1.component.css'],
})
export class SignIn1Component {
  form!: FormGroup;
  expreciones = {
    name: /^[a-zA-Z]{4,16}$/,
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(this.expreciones.name)],
      ],
      lastname: [
        '',
        [Validators.required, Validators.pattern(this.expreciones.name)],
      ],
      dia: ['', [Validators.required, Validators.min(1), Validators.max(30)]],
      mes: ['0', [Validators.required, Validators.min(1), Validators.max(12)]],
      año: [
        '',
        [Validators.required, Validators.min(1900), Validators.max(2005)],
      ],
    });
  }

  get nameValid() {
    const name = this.form.get('name');

    if (name?.touched && name?.value == '') {
      return 'este campo es requerido';
    }

    if (name?.value != '' && !this.expreciones.name.test(name?.value)) {
      return 'El nombre debe tener de 4 a 16 caracteres';
    }

    return '';
  }

  get lastname() {
    const lastname = this.form.get('lastname');

    if (lastname?.touched && lastname.value == '') {
      return 'este campo es requerido';
    }

    if (lastname?.value != '' && !this.expreciones.name.test(lastname?.value)) {
      return 'El nombre debe tener de 4 a 16 caracteres';
    }

    return '';
  }

  get fechaValid() {
    const dia = this.form.get('dia');
    const mes = this.form.get('mes');
    const año = this.form.get('año');

    if (dia?.invalid && dia.touched) {
      return 'ingrese una fecha valida';
    }

    if (mes?.invalid && mes.touched) {
      return 'ingrese una fecha valida';
    }

    if (año?.invalid && año.touched) {
      return 'ingrese una fecha valida';
    }
    return '';
  }

  siguiente() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        control.markAllAsTouched();
        console.log(this.form);
      });
      return;
    }

    const dia = this.form.get('dia')?.value;
    const mes = this.form.get('mes')?.value;
    const año = this.form.get('año')?.value;

    localStorage.setItem('name', this.form.get('name')?.value);
    localStorage.setItem('lastname', this.form.get('lastname')?.value);
    localStorage.setItem('f_nacimiento', `${dia}-${mes}-${año}`);

    this.router.navigate(['/signIn/signIn2']);
  }
}
