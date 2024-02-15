import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
import { HttpClientModule } from '@angular/common/http';
import { Header1Component } from './header1/header1.component';
import { OtpComponent } from './otp/otp.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
import { CustomersComponent } from './customers/customers.component';
=======
import { PaymentComponent } from './payment/payment.component';
// import { NgxCaptchaModule } from 'ngx-captcha';
>>>>>>> 0500d62cd6c62e3146f3b350e7f8e944f5abb95f


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
<<<<<<< HEAD
          MybookingsComponent,
          AdminComponent,
          CustomersComponent
=======
    MybookingsComponent,
    PaymentComponent,
    // NgxCaptchaModule
>>>>>>> 0500d62cd6c62e3146f3b350e7f8e944f5abb95f

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

