/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GerapdfComponent } from './gerapdf.component';

describe('GerapdfComponent', () => {
  let component: GerapdfComponent;
  let fixture: ComponentFixture<GerapdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerapdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerapdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
