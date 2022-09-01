import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageEditComponent } from './user-manage-edit.component';

describe('UserManageEditComponent', () => {
  let component: UserManageEditComponent;
  let fixture: ComponentFixture<UserManageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
