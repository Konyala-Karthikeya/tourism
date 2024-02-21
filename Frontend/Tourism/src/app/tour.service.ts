import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from './tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor(private http: HttpClient) {}

  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8085/getAllTours');
  }

  getTourById(id: number): Observable<Tour> {
    return this.http.get<Tour>('http://localhost:8085/getTourById/' + id);
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

  updateTour(id: number, tour: Tour): Observable<Tour> {
    return this.http.put<Tour>('http://localhost:8085/updateTour/' + id, tour);
  }

  deleteTour(id: number): Observable<any> {
    return this.http.delete('http://localhost:8085/deleteTour/' + id);
  }
}

