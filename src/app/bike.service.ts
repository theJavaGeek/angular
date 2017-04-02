import { Injectable } from '@angular/core';
import { Bike } from './bike'
import { BIKES } from './bikes-store';

@Injectable()
export class BikeService {

  constructor() { }

  getBikes(): Bike[] {
    return BIKES;
  }
}
