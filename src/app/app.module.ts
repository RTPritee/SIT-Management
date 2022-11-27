import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './shared/form/form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboardComponents/dashboard/dashboard.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './dashboardComponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DashboardComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
