import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormComponent } from './ng-form.component';

describe('NgFormComponent', () => {
  let component: NgFormComponent;
  let fixture: ComponentFixture<NgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
