import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { CalenderComponent } from './calender/calender.component';
import { RequestComponent } from './request/request.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { AllocationComponent } from './allocation/allocation.component';
import { TrainerprofilesComponent } from './trainerprofiles/trainerprofiles.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'admin' , canActivate:[AuthGuard], component:AdminComponent},
  {path:'user' , canActivate:[AuthGuard], component:UserComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
   {path:'home' , canActivate: [AuthGuard], component:HomeComponent},
  { path: 'enrollment' , canActivate: [AuthGuard], component:EnrollmentComponent},
  {path:'calendar',component:CalenderComponent},
  { path:'request' , component:RequestComponent},
   {path: 'profile', component:TrainerProfileComponent},
     {path:'allocation', component:AllocationComponent},
  {path: 'trainerprofiles',component:TrainerprofilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
