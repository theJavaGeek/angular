import { Injectable } from '@angular/core';
import { Bike } from './bike'
import { BIKES } from './bikes-store';

@Injectable()
export class BikeService {

  getBike(id: number): Promise<Bike> {
    return this.getBikes()
               .then(bikes => bikes.find(bike => bike.id === id));
  }
  constructor() { }

  getBikes(): Promise<Bike[]> {
    return Promise.resolve(BIKES);
  }
}
