import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSid1Component } from './form-sid1.component';

describe('FormSid1Component', () => {
  let component: FormSid1Component;
  let fixture: ComponentFixture<FormSid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSid1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
