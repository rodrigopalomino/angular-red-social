import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIn2Component } from './sign-in2.component';

describe('SignIn2Component', () => {
  let component: SignIn2Component;
  let fixture: ComponentFixture<SignIn2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignIn2Component]
    });
    fixture = TestBed.createComponent(SignIn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
