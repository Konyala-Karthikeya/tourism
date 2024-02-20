import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any = {};
  countries: any[] = [];

  constructor(private service: CustomerService, private toastr: ToastrService) {

    this.userData = { customerId:'',userName:'',gender:'',country:'',emailId:'',PhoneNumber:'',password:''};
  }

  ngOnInit(): void {
    if (this.service.loggedInUserEmail) {
      this.fetchUserData();
      this.fetchCountries();
    } else {
      console.warn('User is not logged in');
      // Handle case when user is not logged in
    }
  }

  fetchUserData() {
    this.service.getLoggedInUser().subscribe(
      (data: any) => {
        console.log('User data:', data);
        if (data) {
          this.userData = data;
        } else {
          console.warn('User data not available');
        }
      },
      (error: any) => {
        console.error('Failed to fetch user data:', error);
        this.toastr.error('Failed to fetch user data. Please try again.');
      }
    );
  }

  fetchCountries() {
    this.service.getAllCountries().subscribe(
      (data: any) => {
        this.countries = data;
      },
      (error: any) => {
        console.error('Failed to fetch countries:', error);
        this.toastr.error('Failed to fetch countries. Please try again.');
      }
    );
  }

  updateProfile(formData: any) {
    this.service.updateCustomerProfile(formData).subscribe(
      (response: any) => {
        this.toastr.success('Profile updated successfully!');
      },
      (error: any) => {
        this.toastr.error('Failed to update profile. Please try again.');
      }
    );
  }
}