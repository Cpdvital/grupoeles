import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdelesComponent } from './cdeles.component';

describe('CdelesComponent', () => {
  let component: CdelesComponent;
  let fixture: ComponentFixture<CdelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
