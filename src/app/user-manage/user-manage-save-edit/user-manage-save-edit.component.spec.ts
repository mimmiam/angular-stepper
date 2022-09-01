import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageSaveEditComponent } from './user-manage-save-edit.component';

describe('UserManageSaveEditComponent', () => {
  let component: UserManageSaveEditComponent;
  let fixture: ComponentFixture<UserManageSaveEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManageSaveEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManageSaveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
