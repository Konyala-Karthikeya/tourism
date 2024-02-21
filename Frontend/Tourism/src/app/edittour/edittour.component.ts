import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-edittour',
  templateUrl: './edittour.component.html',
  styleUrl: './edittour.component.css'
})
export class EdittourComponent implements OnInit{

  tour =  {
    name: '',
    price: 0,
    duration: '',
    includes: ''
  };

  constructor(private route: ActivatedRoute, private tourService: TourService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.tourService.getTourById(id).subscribe(data => {
      this.tour = data;
    });
  }

  updateTour(): void {
    const id = this.route.snapshot.params['id'];
    this.tourService.updateTour(id, this.tour as any).subscribe(() => {
      this.router.navigate(['/admintour']);
    });
  }
}
