import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsideChatComponent } from './clientside-chat.component';

describe('ClientsideChatComponent', () => {
  let component: ClientsideChatComponent;
  let fixture: ComponentFixture<ClientsideChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsideChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsideChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
