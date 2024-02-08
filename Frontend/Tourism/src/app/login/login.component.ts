import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('container') container!: ElementRef;

  email: any; // Define as string
  password: any; // Define as string

  constructor() { }

  ngOnInit(): void {}

  signIn() {
    this.container.nativeElement.classList.remove('right-panel-active');
    this.container.nativeElement.classList.add('left-panel-active');

    //Check if the entered email and password match
    if (this.email === 'HR' && this.password === 'HR') {
      alert('Login Success!!!');
      // Redirect to dashboard or perform other actions upon successful login
    } else {
      alert('Invalid Credentials');
    }
  }

  signUp() {
    this.container.nativeElement.classList.remove('left-panel-active');
    this.container.nativeElement.classList.add('right-panel-active');
  }
}
