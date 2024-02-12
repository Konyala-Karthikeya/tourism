import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  emailId : any;

  ngOnInit(){
    
  }
  constructor(private router :Router,private toastr : ToastrService,private service : CustomerService){
  service.setIsUserLoggedOut();
  this.router.navigate(['login']);


  }
}
