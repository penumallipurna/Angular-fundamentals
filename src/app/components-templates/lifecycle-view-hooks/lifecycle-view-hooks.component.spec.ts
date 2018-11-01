import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleViewHooksComponent } from './lifecycle-view-hooks.component';

describe('LifecycleViewHooksComponent', () => {
  let component: LifecycleViewHooksComponent;
  let fixture: ComponentFixture<LifecycleViewHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleViewHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleViewHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
