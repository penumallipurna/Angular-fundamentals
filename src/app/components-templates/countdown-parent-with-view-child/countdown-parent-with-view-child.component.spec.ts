import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentWithViewChildComponent } from './countdown-parent-with-view-child.component';

describe('CountdownParentWithViewChildComponent', () => {
  let component: CountdownParentWithViewChildComponent;
  let fixture: ComponentFixture<CountdownParentWithViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownParentWithViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownParentWithViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
