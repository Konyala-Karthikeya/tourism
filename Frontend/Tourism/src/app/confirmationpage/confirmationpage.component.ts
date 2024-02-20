import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmationpage',
  templateUrl: './confirmationpage.component.html',
  styleUrl: './confirmationpage.component.css'
})
export class ConfirmationpageComponent implements OnInit {

  bookingDetails: any;

  constructor() { }

  ngOnInit(): void {
    // Retrieve booking details from local storage
    const bookingDetailsString = localStorage.getItem('bookingDetails');
    if (bookingDetailsString) {
      this.bookingDetails = JSON.parse(bookingDetailsString);
    } else {
      console.error('No booking details found in local storage.');
    }
  }
  
}
