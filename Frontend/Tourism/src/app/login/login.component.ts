import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 customer : any;

  constructor() { }

  ngOnInit(): void {}

  
  loginSubmit(formValue: any) {
    // Submit login form
  }

  
}
