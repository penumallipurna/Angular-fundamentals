import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerVsLazyLoadingComponent } from './eager-vs-lazy-loading.component';

describe('EagerVsLazyLoadingComponent', () => {
  let component: EagerVsLazyLoadingComponent;
  let fixture: ComponentFixture<EagerVsLazyLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerVsLazyLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerVsLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
