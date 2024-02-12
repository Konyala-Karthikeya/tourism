import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formError: string = '';
  password: any;
  confirmPassword: any;
  customer: any;
  countries: any;
  randomNumber: number;

  constructor(private service: CustomerService, private router: Router, private toastr: ToastrService) {
    this.customer = {
      userName: '',
      gender:'',
      country:'',
      phoneNumber:'',
      emailId:'',
      password:'',
    }
    this.randomNumber = 0;
  }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }

  showPassword: boolean = false;

  focusPasswordField(passwordField: any) {
    passwordField.focus();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  registerSubmit(formData: any, form: NgForm) {
    if (
      !formData.userName ||
      !formData.phoneNumber ||
      !formData.gender ||
      !formData.country ||
      !formData.emailId ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      this.formError = 'All fields are required';
      this.toastr.error('All fields are required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      this.formError = 'Passwords do not match';
      form.controls['confirmPassword']?.setErrors({ passwordMismatch: true });
      return;
    }

    this.formError = '';

    this.customer.userName = formData.userName;
    this.customer.gender = formData.gender;
    this.customer.country = formData.country;
    this.customer.phoneNumber = formData.phoneNumber;
    this.customer.emailId = formData.emailId;
    this.customer.password = formData.password;

    console.log(formData);

    this.service.registerCustomer(this.customer).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['login']);
    });

    this.toastr.success("Register successful");

    this.randomNumber = this.getRandomNumber(100000, 999999);

    this.service.sendOtpToCustomer(this.customer.phoneNumber, this.randomNumber)
      .subscribe({
        next: (flag: any) => {
          if (flag) {
            this.service.customer = this.customer;
            this.service.otp = this.randomNumber;
            this.service.setIsUserLoggedIn();
            this.router.navigate(['otp']);
          } else {
            this.toastr.error('OTP is not sent to the user');
          }
        },
        error: (error) => {
          console.error('Error sending OTP:', error);
          this.toastr.error('Error sending OTP. Please try again.');
        }
      });
  }
}