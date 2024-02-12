import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppComponent } from './app.component';
import { PackagesComponent } from './packages/packages.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { Header1Component } from './header1/header1.component';
import { PackageInfoComponent } from './package-info/package-info.component';

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
    PackageInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [
    // Any providers if needed
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
