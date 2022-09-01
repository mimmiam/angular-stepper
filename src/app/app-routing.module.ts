import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperExampleComponent } from './stepper-example/stepper-example.component';

const routes: Routes = [
  { path: '', component: StepperExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
