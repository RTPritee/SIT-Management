import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboardComponents/dashboard/dashboard.component';
import { HomeComponent } from './dashboardComponents/home/home.component';
import { FormComponent } from './shared/form/form.component';
const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
    path: 'form' , component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

