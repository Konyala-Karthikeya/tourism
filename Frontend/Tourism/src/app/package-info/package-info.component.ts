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
      const packageData = JSON.parse(params['data']);
      this.package = packageData;
    });
  }
}
