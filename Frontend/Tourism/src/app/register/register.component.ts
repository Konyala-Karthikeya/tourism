import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  regForm:any;
  confirmPasswordMatch: boolean = true;
  confirmPasswordDirty: boolean = false;
  selectedState: any;
  selectedCountry: any;
  password: any;
  confirmPassword: any;
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  customer: any;

  private confirmPasswordChanged = new Subject<void>();
  
  registerSubmit(regForm: any) {
    console.log(regForm);
  }
  
  ngOnInit(): void {
    
  }
  
  validateConfirmPassword() {
    // Add your validation logic here
  }

  onStateSelect() {
    // Add your state selection logic here
  }

  onCountrySelect() {
    // Add your country selection logic here
  }
}
