import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Bike } from '../bike';
import { BikeService } from '../bike.service'


@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css']
})
export class BikeInfoComponent implements OnInit {

  bike: Bike;

  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.bikeService.getBike(+params['id']))
      .subscribe(bike => this.bike = bike);
  }
  updateBike(): void {
    this.bikeService.updateBike(this.bike);
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }

}
