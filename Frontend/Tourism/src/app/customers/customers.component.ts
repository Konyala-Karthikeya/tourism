import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  customers : any;

  constructor(private service : CustomerService){ }

  ngOnInit(){
    this.service.getAllCustomers().subscribe((data: any) => { this.customers = data; });
  }

}
