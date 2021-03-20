import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddcaseComponent } from './addcase.component';

describe('AddcaseComponent', () => {
  let component: AddcaseComponent;
  let fixture: ComponentFixture<AddcaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
