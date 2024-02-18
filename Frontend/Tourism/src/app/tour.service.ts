import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from './tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor(private http: HttpClient) {}

  getPackage(packageId: any): Observable<any> {
    // Replace 'your-api-endpoint' with the actual endpoint to fetch package details
    return this.http.get<any>('your-api-endpoint/' + packageId);
  }

  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8085/getAllTours');
  }

  addTour(file: File, name: string, price: number, duration: string, includes: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('name', name);
    formData.append('price', price.toString());
    formData.append('duration', duration);
    formData.append('includes', includes);
    return this.http.post<any>('http://localhost:8085/add', formData);
  }
}
