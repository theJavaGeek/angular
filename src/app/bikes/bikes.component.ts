import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes: Bike[];
  selectedBike: Bike;
  newBike: Bike;

  constructor(private router: Router, private bikeService: BikeService) {

  }

  ngOnInit() {
    this.bikeService.getBikes().then(bikes => this.bikes = bikes);
    this.newBike = new Bike();
  }

  createBike(bike: Bike): void {

    this.bikeService.createBike(bike)
      .then(bike => {
        this.bikes.push(bike);
        this.selectedBike = null;
      });
  }

  deleteBike(bike: Bike): void {
    this.bikeService
      .deleteBike(bike)
      .then(() => {
        this.bikes = this.bikes.filter(h => h !== bike);
        if (this.selectedBike === bike) { this.selectedBike = null; }
      });
  }

  showInfo(bike: Bike): void {
    this.selectedBike = bike;
    this.router.navigate(['/information', this.selectedBike.id]);
  }
}
