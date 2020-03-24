import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeelesComponent } from './homeeles.component';

describe('HomeelesComponent', () => {
  let component: HomeelesComponent;
  let fixture: ComponentFixture<HomeelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
