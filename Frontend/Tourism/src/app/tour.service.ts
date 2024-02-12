import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor(private http: HttpClient) {}

  getPackage(packageId: any): Observable<any> {
    // Replace 'your-api-endpoint' with the actual endpoint to fetch package details
    return this.http.get<any>('your-api-endpoint/' + packageId);
  }
}
