import { Component, OnInit } from '@angular/core';
import { Bike } from './bike';
import { BikeService } from './bike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [BikeService]
})
export class AppComponent implements OnInit {

  bikes: Bike[];
  selectedBike: Bike;

  constructor(private bikeService: BikeService) {

  }

  ngOnInit() {
    this.bikes = this.bikeService.getBikes();
  }

  onSelect(bike: Bike): void {
    this.selectedBike = bike;
  }
}
