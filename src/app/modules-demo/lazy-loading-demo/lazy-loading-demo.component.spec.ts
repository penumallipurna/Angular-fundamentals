import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingDemoComponent } from './lazy-loading-demo.component';

describe('LazyLoadingDemoComponent', () => {
  let component: LazyLoadingDemoComponent;
  let fixture: ComponentFixture<LazyLoadingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
