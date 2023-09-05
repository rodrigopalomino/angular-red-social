import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGeneralComponent } from './sidebar-general.component';

describe('SidebarGeneralComponent', () => {
  let component: SidebarGeneralComponent;
  let fixture: ComponentFixture<SidebarGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarGeneralComponent]
    });
    fixture = TestBed.createComponent(SidebarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
