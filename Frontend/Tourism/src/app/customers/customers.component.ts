import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  customers : any;

  constructor(private service : CustomerService, private toastr: ToastrService){ }

  ngOnInit(){
    this.service.getAllCustomers().subscribe((data: any) => { this.customers = data; });
  }

  deleteEmployee(customers: any) {
    this.service.deleteEmployee(customers.customerId).subscribe((data: any) => {console.log(data);});

    const i = this.customers.findIndex((element: any) => {
      return element.customerId == customers.customerId;
    });

    this.customers.splice(i, 1);

    this.toastr.success('customer Deleted Successfully!!!');
  }

}
