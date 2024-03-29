import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import { Tour } from '../tour';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourinfo',
  templateUrl: './tourinfo.component.html',
  styleUrls: ['./tourinfo.component.css']
})
export class TourinfoComponent implements OnInit {
  tours: Tour[] = [];

  constructor(private tourService: TourService, private router: Router) { }

  ngOnInit(): void {
    this.loadTours();
  }

  loadTours(): void {
    this.tourService.getAllTours().subscribe(
      (data: Tour[]) => {
        this.tours = data;
      },
      error => {
        console.error('Error fetching tours:', error);
      }
    );
  }

  bookNow(selectedTour: Tour): void {
    this.router.navigate(['/booking'], { queryParams: { id: selectedTour.id } });
  }
}
