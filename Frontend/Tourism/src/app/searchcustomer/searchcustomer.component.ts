import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrl: './searchcustomer.component.css'
})
export class SearchcustomerComponent implements OnInit {

  customerId:any;
  customer:any;

  constructor(private service : CustomerService){}

  ngOnInit(){}

  getById(){
    this.service.getCustomerById(this.customerId).subscribe((data: any) => {this.customer = data;}) // Corrected parameter
  }
}
