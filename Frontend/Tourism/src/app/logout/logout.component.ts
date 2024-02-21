import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private service: CustomerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    this.service.setIsUserLoggedOut(); // Update user login status

    this.toastr.success('Logout successfully'); // Display success message

    this.router.navigate(['login']); // Navigate to login page
  }
}