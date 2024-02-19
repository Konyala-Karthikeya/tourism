declare var Razorpay:any;
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit, OnDestroy {
  selectedPackage: any;
  showPaymentDetails: boolean = false;
  bookingDate: string = ''; // Define bookingDate property with an initial value

  // Initialize properties with default values
  total: number = 0;
  tax: number = 0;
  totalInclusive: number = 0;

  routerSubscription: any;

  constructor(private toastr: ToastrService, private router: Router, private service: TourService) { }

  ngOnInit(): void {
    this.loadSelectedPackage(); // Load selected package during initialization

    // Subscribe to router events to detect navigation back to this component
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Load selected package when the component becomes active again
      this.loadSelectedPackage();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from router events to avoid memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }

    // Check if localStorage is available before using it
    if (this.isLocalStorageAvailable()) {
      // Clear selected package data when leaving the My Bookings page
      localStorage.removeItem('selectedPackage');
    }
  }

  loadSelectedPackage(): void {
    if (this.isLocalStorageAvailable()) {
      const selectedPackageString = localStorage.getItem('selectedPackage');
      if (selectedPackageString) {
        this.selectedPackage = JSON.parse(selectedPackageString);
      }
    } else {
      // console.error('localStorage is not available.');
    }
  }

  isLocalStorageAvailable(): boolean {
    try {
      const storage = window.localStorage;
      const testKey = '__storage_test__';
      storage.setItem(testKey, testKey);
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  calculatePayment() {
    // Validate if date is selected
    if (!this.bookingDate) {
      this.toastr.error('Please select a date.', 'Error'); // Display toastr error message
      return;
    }
     // Get the current date
     const currentDate = new Date();
  
     // Convert the bookingDate string to a Date object
     const selectedDate = new Date(this.bookingDate);
   
     // Check if the selected date is before the current date
     if (selectedDate < currentDate) {
       this.toastr.error('Selected date cannot be in the past.', 'Error');
       return;
     }
    // Calculate total from the package price
    if (this.selectedPackage) {
      this.total = this.selectedPackage.price;
    } else {
      console.error('No package selected.'); // Handle error if no package is selected
      return;
    }

    // Calculate tax (5%)
    this.tax = this.total * 0.05;

    // Calculate total inclusive of tax
    this.totalInclusive = this.total + this.tax;

    this.showPaymentDetails = true;
  }


proceedToPayment() {
  // Store booking details in localStorage before navigating to payment page
  localStorage.setItem('bookingDetails', JSON.stringify({
    selectedPackage: this.selectedPackage,
    bookingDate: this.bookingDate,
    total: this.total,
    tax: this.tax,
    totalInclusive: this.totalInclusive
  }));

  // Navigate to the payment page
  // this.router.navigate(['payment']);

  const RazorpayOptions = {
    description :'Sample Rozorpay demo',
    currency :'INR',
    amount :this.totalInclusive * 100, 
    name : 'Explore-Era',
    key : 'rzp_test_AwJmjsOGm7AicJ',
    image:'https://cdn-icons-png.flaticon.com/512/1688/1688408.png',
    prefill :{
      name:'Ajay Kumar',
      email:'pasumarthyajaykumar@gmail.com',
      phone :'8309926027'
    },
    theme:{
      color:'#f37254'
    },
    modal :{
      ondismiss :()=>{
        console.log('dismissed');
      }
    }

  }
  const successCallback=(paymentid :any)=>{
    console.log("sucess");
  }
  const failureCallback=(e:any)=>{
    console.log("failure");
    console.log(e);
  }
  Razorpay.open(RazorpayOptions,successCallback,failureCallback);
  // this.goToProducts();
  // setTimeout(() => {
  //   this.router.navigate(['statuspage']);
  // }, 5000);
}

clearStoredData() {
  // Clear stored data from localStorage
  localStorage.removeItem('bookingDetails');
}
}


