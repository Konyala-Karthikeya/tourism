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

  constructor(private service: CustomerService, private toastr: ToastrService) {}

  ngOnInit(): void {
    // Fetch user data when the component initializes
    this.fetchUserData();
    // Fetch countries
    this.fetchCountries();
  }

  fetchUserData() {
    this.service.getLoggedInUser().subscribe(
      (data: any) => {
        console.log('User data:', data);
        if (data) {
          this.userData = data;
          // User data is available, proceed with other actions if needed
        } else {
          console.warn('User data not available');
          // You may choose to set some default values for userData here
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
    // Call service method to update user profile
    this.service.updateCustomerProfile(formData).subscribe(
      (response: any) => {
        // Handle success response
        this.toastr.success('Profile updated successfully!');
      },
      (error: any) => {
        // Handle error response
        this.toastr.error('Failed to update profile. Please try again.');
      }
    );
  }
}
