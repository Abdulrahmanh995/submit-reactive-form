import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSubmitFormComponent } from './custom-submit-form.component';

describe('CustomSubmitFormComponent', () => {
  let component: CustomSubmitFormComponent;
  let fixture: ComponentFixture<CustomSubmitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSubmitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
