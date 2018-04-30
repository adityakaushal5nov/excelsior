import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ProfessorsCseComponent } from './professors-cse/professors-cse.component';
import { ProfessorRatingComponent } from './professor-rating/professor-rating.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFormComponent,
    DepartmentsComponent,
    ProfessorsCseComponent,
    ProfessorRatingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component:  LoginFormComponent},
      {path: 'department', component: DepartmentsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
