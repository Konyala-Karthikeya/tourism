import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: NgForm;
  showPassword: boolean = false;
  protected aFormGroup: FormGroup;
  siteKey:string = "6LewVG8pAAAAADGjs0pIN7d5p0pI6eK4QJMnpDsh";
  customer: any;

  constructor(private router: Router, private toastr: ToastrService, private service : CustomerService, private formBuilder: FormBuilder) {
    this.loginForm = {} as NgForm;
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  async loginSubmit(formData: any, form: NgForm) {
    if (!this.aFormGroup.controls['recaptcha'].valid) {
      // If captcha is not validated, show error message
      this.toastr.error('Please complete the captcha');
      return;
    }

    if (!formData.email || !formData.password) {
      this.toastr.error('Both email and password are required');
      return;
    }

    console.log(formData.email);
    console.log(formData.password);

    await this.service.customerLogin(formData.email, formData.password).then((data: any) => {
      console.log(data);
      this.customer = data;
    });

    if(this.customer != null ){
      this.service.setIsUserLoggedIn();
      this.toastr.success(" login Success!!");
      this.router.navigate(['packages']);
    } else {
      this.toastr.error("Invalid Login credentials");
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}

  

