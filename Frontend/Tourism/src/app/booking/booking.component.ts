declare var Razorpay:any;

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from '../tour';
import { TourService } from '../tour.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  selectedTour: Tour | null = null;
  showPaymentDetails: boolean = false;
  bookingDate: string = ''; // Define bookingDate property with an initial value

  // Initialize properties with default values
  total: number = 0;
  tax: number = 0;
  totalInclusive: number = 0;



constructor(private route: ActivatedRoute, private router: Router, private tourService: TourService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.tourService.getTourById(id).subscribe(
          (tour: Tour) => {
            this.selectedTour = tour;
          },
          error => {
            console.error('Error fetching tour details:', error);
          }
        );
      }
    });
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
    if (this.selectedTour) {
      this.total = this.selectedTour.price;
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
    selectedTour: this.selectedTour,
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



