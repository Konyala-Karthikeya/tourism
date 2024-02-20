import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from '../tour';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  selectedTour: Tour | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private tourService: TourService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.tourService.getTourById(id).subscribe(
          (tour: Tour) => {
            this.selectedTour = tour;
          },
          error => {
            console.error('Error fetching tour details:', error);
          }
        );
      }
    });
  }
}
