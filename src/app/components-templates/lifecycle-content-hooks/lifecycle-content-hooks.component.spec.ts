import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleContentHooksComponent } from './lifecycle-content-hooks.component';

describe('LifecycleContentHooksComponent', () => {
  let component: LifecycleContentHooksComponent;
  let fixture: ComponentFixture<LifecycleContentHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleContentHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleContentHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
