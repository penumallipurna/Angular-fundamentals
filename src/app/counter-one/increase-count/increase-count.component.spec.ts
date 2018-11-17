import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseCountComponent } from './increase-count.component';

describe('IncreaseCountComponent', () => {
  let component: IncreaseCountComponent;
  let fixture: ComponentFixture<IncreaseCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
