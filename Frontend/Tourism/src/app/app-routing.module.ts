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
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { AddtourComponent } from './addtour/addtour.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmationpageComponent } from './confirmationpage/confirmationpage.component';
import { AdmintourComponent } from './admintour/admintour.component';
import { EdittourComponent } from './edittour/edittour.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }, // New route for 'profile' URL segment
  { path: 'packages', canActivate: [authGuard], component: PackagesComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'package/:id', component: PackageInfoComponent },
  { path: 'otp', canActivate: [authGuard], component: OtpComponent },
  { path: 'admin', canActivate: [authGuard], component: AdminComponent },
  { path: 'customers', canActivate: [authGuard], component: CustomersComponent },
  { path: 'mybookings', component: MybookingsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'searchCustomer', canActivate: [authGuard], component: SearchcustomerComponent },
  { path: 'mybookings', component: MybookingsComponent }, // Route for My Bookings component
  { path: 'payment', component: PaymentComponent }, // Route for My Bookings component
  { path: 'addtour', canActivate:[authGuard], component:AddtourComponent},
  { path: 'tourinfo', canActivate:[authGuard], component:TourinfoComponent},
  { path: 'welcome', canActivate:[authGuard], component:WelcomeComponent},
  { path: 'booking', canActivate:[authGuard], component:BookingComponent},
  { path: 'confirmation', component: ConfirmationpageComponent },
  { path: 'admintour', canActivate:[authGuard],component:AdmintourComponent},
  { path: 'edittour/:id', canActivate: [authGuard], component: EdittourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

