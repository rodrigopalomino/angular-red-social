import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenInvalidoComponent } from './token-invalido.component';

describe('TokenInvalidoComponent', () => {
  let component: TokenInvalidoComponent;
  let fixture: ComponentFixture<TokenInvalidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenInvalidoComponent]
    });
    fixture = TestBed.createComponent(TokenInvalidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
