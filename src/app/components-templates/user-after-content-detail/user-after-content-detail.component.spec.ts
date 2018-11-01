import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAfterContentDetailComponent } from './user-after-content-detail.component';

describe('UserAfterContentDetailComponent', () => {
  let component: UserAfterContentDetailComponent;
  let fixture: ComponentFixture<UserAfterContentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAfterContentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAfterContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
