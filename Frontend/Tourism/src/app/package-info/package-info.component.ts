import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-info',
  templateUrl: './package-info.component.html',
  styleUrls: ['./package-info.component.css']
})
export class PackageInfoComponent implements OnInit {
  package: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const packageId = params['id'];
      // Mock package data (replace with actual data)
      this.package = {
        id: packageId,
        name: "Mock Package",
        description: "This is a mock package description",
        price: 100,
        primarydestination: "Mock Destination 1",
        secondarydestination: "Mock Destination 2",
        duration: "5 days",
        inclusions: "Mock inclusions"
      };
    });
  }
}
