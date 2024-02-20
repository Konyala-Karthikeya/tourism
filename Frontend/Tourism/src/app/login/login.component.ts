// login.component.ts
declare var google: any;
import { Component, OnInit } from '@angular/core';
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
  siteKey: string = "6LewVG8pAAAAADGjs0pIN7d5p0pI6eK4QJMnpDsh";
  loginForm: NgForm;
  showPassword: boolean = false;
  protected aFormGroup: FormGroup;
  customer : any;

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

    google.accounts.id.initialize({
    client_id:'317949943993-jkvtflfkkvnak55c7phm0pnlmpgvb6v4.apps.googleusercontent.com',
    callback: (resp :any)=>this.handleLogin(resp)
      
    

    });

    google.accounts.id.renderButton(document.getElementById("google-btn"),{
    theme :'filled_blue',
    size : 'large',
    shape:'rectangle',
    width:350
    })
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));
  }

 handleLogin(response :any){
  console.log("working");
  if(response){
    const payLoad = this.decodeToken(response.credential)
    sessionStorage.setItem("loggedInUser",JSON.stringify(payLoad));
    localStorage.setItem("email",payLoad.email);
    this.service.setIsUserLoggedIn();
    this.router.navigate(['tourinfo']);
  }

 }

  async loginSubmit(formData: any,form: NgForm) {
    // if (!this.aFormGroup.controls['recaptcha'].valid) {
    //   this.toastr.error('Please complete the captcha');
    //   return;
    // }

    if (!formData.emailId || !formData.password) {
      this.toastr.error('Both email and password are required');
      return;
    }

    console.log(formData.emailId);
    console.log(formData.password);

    if (formData.emailId == 'admin@gmail.com' && formData.password == 'Admin@123') {
      this.service.setIsUserLoggedIn();
      localStorage.setItem('emailId', formData.emailId);
      this.router.navigate(['admin']);
    } else {
      this.customer = null;
    }
    await this.service.customerLogin(formData.emailId, formData.password).then((data: any) => {
      console.log(data);
      this.customer = data;
      localStorage.setItem("userid",data.userId);
      localStorage.setItem("emailId",data.emailId);
    });
      if (this.customer != null) {
        this.service.setIsUserLoggedIn();
        this.toastr.success("Customer login Success!!");
        this.router.navigate(['welcome']);
      } else {
        this.toastr.error("Invalid Login credentials");
      }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
