import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackagesComponent } from './packages/packages.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { ToastrModule } from 'ngx-toastr';
import { Header1Component } from './header1/header1.component';
import { OtpComponent } from './otp/otp.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { PaymentComponent } from './payment/payment.component';
import { AddtourComponent } from './addtour/addtour.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BookingComponent } from './booking/booking.component';
import { ConfirmationpageComponent } from './confirmationpage/confirmationpage.component';
import { AdmintourComponent } from './admintour/admintour.component';
import { EdittourComponent } from './edittour/edittour.component';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    LogoutComponent,
    Header1Component,
    OtpComponent,
    MybookingsComponent,
    AdminComponent,
    CustomersComponent,
    SearchcustomerComponent,
    PaymentComponent,
    AddtourComponent,
    TourinfoComponent,
    ProfileComponent,
    WelcomeComponent,
    BookingComponent,
    ConfirmationpageComponent,
    AdmintourComponent,
    EdittourComponent,
    Header2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxCaptchaModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()) // Enable fetch for HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
