import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerList2Component } from './customer-list2.component';

describe('CustomerList2Component', () => {
  let component: CustomerList2Component;
  let fixture: ComponentFixture<CustomerList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
