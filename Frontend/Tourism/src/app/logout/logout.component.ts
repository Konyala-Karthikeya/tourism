import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'] // corrected typo in styleUrls
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private service: CustomerService) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    // Assuming setIsUserLoggedOut() performs the necessary actions to mark user as logged out
    this.service.setIsUserLoggedOut();
    this.router.navigate(['login']);
  }
}
