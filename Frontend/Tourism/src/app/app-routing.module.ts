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
import { PackageInfoComponent } from './package-info/package-info.component';
import { OtpComponent } from './otp/otp.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { AdminComponent } from './admin/admin.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home page if no path provided
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'packages', canActivate: [authGuard], component: PackagesComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'package/:id', component: PackageInfoComponent }, // Route for package info with ID parameter
  { path: 'otp',        canActivate:[authGuard],   component:OtpComponent },
  { path: 'admin', canActivate:[authGuard], component:AdminComponent},
  { path: 'customers', canActivate:[authGuard], component:CustomersComponent},
  { path: 'otp', canActivate: [authGuard], component: OtpComponent },
  { path: 'mybookings', component: MybookingsComponent }, // Route for My Bookings component
  { path: 'payment', component: PaymentComponent } // Route for My Bookings component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
