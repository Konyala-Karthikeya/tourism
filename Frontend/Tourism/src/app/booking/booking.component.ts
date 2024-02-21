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
  bookingDetails: any = null;


constructor(private route: ActivatedRoute, private router: Router, private tourService: TourService, private toastr: ToastrService) { }

ngOnInit(): void {
  const bookingDetailsString = localStorage.getItem('bookingDetails');
  if (bookingDetailsString) {
    this.bookingDetails = JSON.parse(bookingDetailsString);
    if (this.bookingDetails.paymentCompleted) {
      // Payment has been completed, display booking details
      this.showPaymentDetails = true;
    }
  }

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
  this.checkBookingDetails();
}

checkBookingDetails(): void {
  const bookingDetailsString = localStorage.getItem('bookingDetails');
  if (bookingDetailsString) {
    this.bookingDetails = JSON.parse(bookingDetailsString);
    if (this.bookingDetails.paymentCompleted) {
      this.showPaymentDetails = true;
    }
  }
}

calculatePayment() {
  if (!this.bookingDate) {
    this.toastr.error('Please select a date.', 'Error');
    return;
  }

  const currentDate = new Date();
  const selectedDate = new Date(this.bookingDate);

  if (selectedDate < currentDate) {
    this.toastr.error('Selected date cannot be in the past.', 'Error');
    return;
  }

  if (this.selectedTour) {
    this.total = this.selectedTour.price;
  } else {
    console.error('No package selected.');
    return;
  }

  this.tax = this.total * 0.05;
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
    totalInclusive: this.totalInclusive,
    paymentCompleted: true // Set paymentCompleted to true after successful payment
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
  const successCallback = (paymentid: any) => {
    console.log("Payment success");
    this.updateBookingDetails(true); // Update paymentCompleted flag
    this.router.navigate(['confirmationpage']);
  };

  const failureCallback = (error: any) => {
    console.log("Payment failed");
    console.error(error);
    this.clearStoredData();
  };

  Razorpay.open(RazorpayOptions, successCallback, failureCallback);
  // this.goToProducts();
  // setTimeout(() => {
  //   this.router.navigate(['statuspage']);
  // }, 5000);
}
updateBookingDetails(paymentCompleted: boolean) {
  const storedBookingDetails = JSON.parse(localStorage.getItem('bookingDetails') || '{}');
  storedBookingDetails.paymentCompleted = paymentCompleted;
  localStorage.setItem('bookingDetails', JSON.stringify(storedBookingDetails));
}

clearStoredData() {
  localStorage.removeItem('bookingDetails');
  this.bookingDetails = null;
}
}



