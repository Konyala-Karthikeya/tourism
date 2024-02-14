import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {


  constructor(private toastr: ToastrService,private router :Router,private service :CustomerService) { } 

  ngOnInit() {
  }

  submitOTP(formData: any) { 
    if (this.service.otp == formData.otp) { 
      this.service.registerCustomer().subscribe((data:any)=>{
        console.log(data);
      });
  
      this.toastr.success('Registration is successful !!');
      this.router.navigate(['login']); 
    } else {
      console.log(formData);
      this.toastr.error('Invalid OTP');
    }
  }
}