import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarChatComponent } from './sidebar-chat.component';

describe('SidebarChatComponent', () => {
  let component: SidebarChatComponent;
  let fixture: ComponentFixture<SidebarChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarChatComponent]
    });
    fixture = TestBed.createComponent(SidebarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
