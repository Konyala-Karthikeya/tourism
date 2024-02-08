import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PackagesComponent } from './packages/packages.component';
import { HomeComponent } from './home/home.component';
//import { ShowemployeesComponent } from './showemployees/showemployees.component';
//import { ShowempbyidComponent } from './showempbyid/showempbyid.component';
//import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'home',            component:HomeComponent},
  {path:'login',       component:LoginComponent},
  {path:'register',    component:RegisterComponent},
  {path:'packages',    component:PackagesComponent},

  //{path:'showemps',    component:ShowemployeesComponent},
 // {path:'showempbyid', component:ShowempbyidComponent},
  //{path:'logout',      component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }