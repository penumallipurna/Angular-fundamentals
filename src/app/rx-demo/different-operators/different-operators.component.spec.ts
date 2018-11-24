import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentOperatorsComponent } from './different-operators.component';

describe('DifferentOperatorsComponent', () => {
  let component: DifferentOperatorsComponent;
  let fixture: ComponentFixture<DifferentOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
