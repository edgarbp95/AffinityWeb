/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AffinityProComponent } from './AffinityPro.component';

describe('AffinityProComponent', () => {
  let component: AffinityProComponent;
  let fixture: ComponentFixture<AffinityProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffinityProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffinityProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
