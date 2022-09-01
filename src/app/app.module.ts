import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialExampleModule } from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperExampleComponent } from './stepper-example/stepper-example.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserManageDetailComponent } from './user-manage/user-manage-detail/user-manage-detail.component';
import { UserManageEditComponent } from './user-manage/user-manage-edit/user-manage-edit.component';
import { UserManageSaveEditComponent } from './user-manage/user-manage-save-edit/user-manage-save-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    StepperExampleComponent,
    UserManageComponent,
    UserManageDetailComponent,
    UserManageEditComponent,
    UserManageSaveEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
