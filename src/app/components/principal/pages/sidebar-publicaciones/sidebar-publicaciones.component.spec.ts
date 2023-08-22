import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPublicacionesComponent } from './sidebar-publicaciones.component';

describe('SidebarPublicacionesComponent', () => {
  let component: SidebarPublicacionesComponent;
  let fixture: ComponentFixture<SidebarPublicacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarPublicacionesComponent]
    });
    fixture = TestBed.createComponent(SidebarPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
