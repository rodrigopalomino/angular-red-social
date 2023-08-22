import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePublicacionesComponent } from './page-publicaciones.component';

describe('PagePublicacionesComponent', () => {
  let component: PagePublicacionesComponent;
  let fixture: ComponentFixture<PagePublicacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePublicacionesComponent]
    });
    fixture = TestBed.createComponent(PagePublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
