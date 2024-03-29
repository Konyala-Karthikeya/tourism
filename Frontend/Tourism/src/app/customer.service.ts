import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  cartPackages: any;
  loggedInUserEmail: any;

  getIsUserLogged() {
    throw new Error('Method not implemented.');
  }

  isUserLoggedIn: boolean;
  loginStatus: any;
  // cartpackages : any;
  customer: any;
  otp: number;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();
    // this.cartpackages=[];
    this.otp = 0;
    this.customer = {
      userName: '',
      gender: '',
      country: '',
      phoneNumber: '',
      emailId: '',
      password: ''
    };
  }

  sendOtpToCustomer(phoneNumber: string, otp: number): Observable<any> {
    return this.http.get(`http://localhost:8085/sendOtp/${phoneNumber}/${otp}`);
  }

  // getAllCountries(): any {
  //   return this.http.get('https://restcountries.com/v3.1/all');
  // }

  getAllCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all').pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching countries:', error);
        return throwError('Error fetching countries. Please try again later.'); // You can customize the error message
      })
    );
  }
  
  registerCustomer():any{
    return this.http.post('http://localhost:8085/addCustomer',this.customer);
  }
 
  customerLogin(emailId: any, password: any) {
    return this.http.get('http://localhost:8085/customerLogin/' + emailId + '/' + password).toPromise()
      .then((response: any) => {
        // Assuming the response contains user data including email
        this.loggedInUserEmail = response.emailId; // Assuming emailId is the property that holds the email
        return response;
      })
      .catch((error: any) => {
        console.error('Failed to log in:', error);
        throw error; // Rethrow the error to handle in the component
      });
  }

  sendMail(mail : string, message : string){
    return this.http.get('http://localhost:8085/sendMail/'+mail+'/'+ message);
  }

  getAllCustomers():any {
    return this.http.get('http://localhost:8085/getCustomers');
  }

  getCustomerById(customerId:any):any{
    return this.http.get('http://localhost:8085/getCustomerById/' + customerId)
  }
  // addTomybookings(Package: any) {
  //   this.cartpackages.push(Package);
  // }

  updateCustomerProfile(customerData: any): Observable<any> {
    return this.http.put('http://localhost:8085/updateCustomer', customerData);
  }

  getLoggedInUser(): Observable<any> {
    console.log('Fetching logged-in user data for email:', this.loggedInUserEmail);
    return this.http.get<any>('http://localhost:8085/getCustomerByEmail/' + this.loggedInUserEmail);
  }
  
  deleteEmployee(customerId: any) {
    return this.http.delete('http://localhost:8085/deleteCustomerById/' + customerId);
  }

  setIsUserLoggedIn() { 
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }

  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
  }

  getIsUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }
}
