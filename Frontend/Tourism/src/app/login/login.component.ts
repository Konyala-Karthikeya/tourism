// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  siteKey: string = "6LewVG8pAAAAADGjs0pIN7d5p0pI6eK4QJMnpDsh";
  aFormGroup: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service: CustomerService,
    private formBuilder: FormBuilder
  ) {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['']
    });
  }

  ngOnInit(): void {
  }

  async loginSubmit(formData: any) {
    if (!this.aFormGroup.controls['recaptcha'].valid) {
      this.toastr.error('Please complete the captcha');
      return;
    }

    if (!formData.emailId || !formData.password) {
      this.toastr.error('Both email and password are required');
      return;
    }

    try {
      const customer = await this.service.customerLogin(formData.emailId, formData.password);
      if (customer != null) {
        this.service.setIsUserLoggedIn();
        this.toastr.success(" login Success!!");
        this.router.navigate(['packages']);
      } else {
        this.toastr.error("Invalid Login credentials");
      }
    } catch (error) {
      console.error('Error during login:', error);
      this.toastr.error("An error occurred during login. Please try again later.");
    }
  }
}
