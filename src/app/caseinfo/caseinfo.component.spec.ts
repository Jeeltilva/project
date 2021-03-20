import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaseinfoComponent } from './caseinfo.component';

describe('CaseinfoComponent', () => {
  let component: CaseinfoComponent;
  let fixture: ComponentFixture<CaseinfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
