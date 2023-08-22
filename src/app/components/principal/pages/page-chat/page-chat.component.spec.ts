import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChatComponent } from './page-chat.component';

describe('PageChatComponent', () => {
  let component: PageChatComponent;
  let fixture: ComponentFixture<PageChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageChatComponent]
    });
    fixture = TestBed.createComponent(PageChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
