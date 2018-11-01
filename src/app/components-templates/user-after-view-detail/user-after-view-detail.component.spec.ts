import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAfterViewDetailComponent } from './user-after-view-detail.component';

describe('UserAfterViewDetailComponent', () => {
  let component: UserAfterViewDetailComponent;
  let fixture: ComponentFixture<UserAfterViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAfterViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAfterViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
