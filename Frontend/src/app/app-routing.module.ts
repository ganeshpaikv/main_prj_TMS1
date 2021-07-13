import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrainerComponent } from './trainer/trainer.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'admin' , canActivate:[AuthGuard], component:AdminComponent},
  {path:'user' , canActivate:[AuthGuard], component:UserComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  { path:'forbiden', component:ForbiddenComponent},
  {path : 'trainer', component:TrainerComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
