import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaelesComponent } from './agendaeles.component';

describe('AgendaelesComponent', () => {
  let component: AgendaelesComponent;
  let fixture: ComponentFixture<AgendaelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
