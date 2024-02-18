import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-addtour',
  templateUrl: './addtour.component.html',
  styleUrls: ['./addtour.component.css']
})
export class AddtourComponent implements OnInit {
  tour: any = { name: '', price: '', duration: '', includes: 'Hotels, Food, Flights, Travel, Guide', image: null };

  constructor(private tourService: TourService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.tourService.addTour(this.tour.image, this.tour.name, this.tour.price, this.tour.duration, this.tour.includes)
      .subscribe(
        tour => {
          console.log('Tour added successfully:', tour);
          this.toastr.success('Tour added successfully', 'Success');
          // Clear form fields after successful submission
          this.tour.name = '';
          this.tour.price = 0;
          this.tour.duration = '';
          this.tour.includes = '';
        },
        error => {
          console.error('Error adding tour:', error);
          this.toastr.error('Error adding tour', 'Error');
        }
      );
  }

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.tour.image = fileList[0];
    }
  }
}
