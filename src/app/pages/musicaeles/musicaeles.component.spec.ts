import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaelesComponent } from './musicaeles.component';

describe('MusicaelesComponent', () => {
  let component: MusicaelesComponent;
  let fixture: ComponentFixture<MusicaelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
