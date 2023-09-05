import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGeneralComponent } from './page-general.component';

describe('PageGeneralComponent', () => {
  let component: PageGeneralComponent;
  let fixture: ComponentFixture<PageGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGeneralComponent]
    });
    fixture = TestBed.createComponent(PageGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
