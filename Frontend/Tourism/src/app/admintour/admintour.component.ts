import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TourService } from '../tour.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admintour',
  templateUrl: './admintour.component.html',
  styleUrl: './admintour.component.css'
})
export class AdmintourComponent implements OnInit{
  tours: Tour[] = [];

  constructor(private tourService: TourService, private router: Router, private toastr: ToastrService ) { }

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

  editTour(tour: Tour): void {
    this.router.navigate(['/edittour', tour.id]);
  }

  deleteTour(id: number): void {
    this.tourService.deleteTour(id).subscribe(() => this.loadTours());
    this.toastr.success('Tour Package Deleted Successfully!!!');
  }
}
