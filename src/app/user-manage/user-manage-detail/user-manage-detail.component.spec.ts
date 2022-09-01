import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageDetailComponent } from './user-manage-detail.component';

describe('UserManageDetailComponent', () => {
  let component: UserManageDetailComponent;
  let fixture: ComponentFixture<UserManageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManageDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
