import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PackagesComponent } from './packages/packages.component';
import { authGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { PackageInfoComponent } from './package-info/package-info.component'; // Import PackageInfoComponent

const routes: Routes = [
  { path: '' , component: HeaderComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'packages', canActivate:[authGuard], component: PackagesComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'package/:id', component: PackageInfoComponent }, // Route for package info with ID parameter

  // {path:'showemps', canActivate:[authGuard], component:ShowemployeesComponent},
  // {path:'showempbyid', canActivate:[authGuard], component:ShowempbyidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
