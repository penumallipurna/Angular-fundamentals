import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormValidationComponent } from './template-driven-form-validation.component';

describe('TemplateDrivenFormValidationComponent', () => {
  let component: TemplateDrivenFormValidationComponent;
  let fixture: ComponentFixture<TemplateDrivenFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
