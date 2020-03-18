import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsSubmittedPropertyComponent } from './is-submitted-property.component';

describe('IsSubmittedPropertyComponent', () => {
  let component: IsSubmittedPropertyComponent;
  let fixture: ComponentFixture<IsSubmittedPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsSubmittedPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsSubmittedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
