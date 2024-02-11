import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  isUserLoggedIn : boolean;
  loginStatus : any;

  customer : any;
  otp : number;


  constructor(private http : HttpClient) {
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();

    this.otp = 0;
    this.customer ={
      userName:'',
      gender:'',
      country:'',
      state:'',
      city:'',
      phoneNumber:'',
      email:'',
      password:''
    }
  }

  sendOtpToUser(phoneNumber: string, otp: number): Observable<any> {
    return this.http.get(`http://localhost:8085/sendOtp/${phoneNumber}/${otp}`);
  }

  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  
  registerCustomer(custommer:any):any{
    return this.http.post('http://localhost:8085/addCustomer',this.customer);
  }
 
  customerLogin(emailId:any,password:any){
    return this.http.get('http://localhost:8085/customerLogin/' + emailId +'/'+ password).toPromise();
  }

  sendMail(mail : string, message : string){
    return this.http.get('http://localhost:8085/sendMail/'+mail+'/'+ message);
  }

setIsUserLoggedIn(){
   this.isUserLoggedIn = true;
   this.loginStatus.next(true);
}

getIsUserLoggedIn():boolean{
  return this.isUserLoggedIn;
}

getLoginStatus(): any {
  return this.loginStatus.asObservable();
}

setIsUserLoggedOut() {
  this.isUserLoggedIn = false;
  this.loginStatus.next(false);
}


}
