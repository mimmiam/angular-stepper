import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperExampleComponent } from './stepper-example/stepper-example.component';
import { UserManageDetailComponent } from './user-manage/user-manage-detail/user-manage-detail.component';
import { UserManageEditComponent } from './user-manage/user-manage-edit/user-manage-edit.component';
import { UserManageSaveEditComponent } from './user-manage/user-manage-save-edit/user-manage-save-edit.component';
import { UserManageComponent } from './user-manage/user-manage.component';

const routes: Routes = [
  // { path: '', component: UserManageComponent },
  { path: 'stepper', component: StepperExampleComponent },
  {
    path: '',
    component: UserManageComponent,
    children: [
      {
        path: 'view',
        component: UserManageDetailComponent,
      },
      {
        path: 'edit',
        component: UserManageEditComponent,
      },
      {
        path: 'save',
        component: UserManageSaveEditComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
