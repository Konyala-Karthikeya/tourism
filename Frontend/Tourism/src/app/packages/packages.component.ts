import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  packages: any;
  emailId: any;

  //AddToCart
  cartItems: any;

  constructor() {

    //AddToCart
    this.cartItems = [];

    // this.emailId = localStorage.getItem('emailId');

    this.packages = [
      {id:1001, name:"Goa",   price:14999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/goa1.jpg"},
      {id:1002, name:"Goa", price:24999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/goa2.jpg"},
      {id:1003, name:"Kerala",  price:34999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/kerala1.jpg"},
      {id:1004, name:"Kerala",  price:44999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/kerala2.jpg"},
    ];
  }

  ngOnInit() {
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }

}

