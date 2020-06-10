import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework11Component } from './homework11.component';

describe('Homework11Component', () => {
  let component: Homework11Component;
  let fixture: ComponentFixture<Homework11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
