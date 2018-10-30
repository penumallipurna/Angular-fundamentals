import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentWithTempRefVarComponent } from './countdown-parent-with-temp-ref-var.component';

describe('CountdownParentWithTempRefVarComponent', () => {
  let component: CountdownParentWithTempRefVarComponent;
  let fixture: ComponentFixture<CountdownParentWithTempRefVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownParentWithTempRefVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownParentWithTempRefVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
