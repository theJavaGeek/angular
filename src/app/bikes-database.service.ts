import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class BikesDatabaseService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let bikes = [
      { id: 1, model: 'CBR250R', manufacturer: 'Honda' },
      { id: 2, model: 'CBR150R', manufacturer: 'Honda' },
      { id: 3, model: 'Ninja250R', manufacturer: 'Kawasaki' },
      { id: 4, model: 'CBR1000R', manufacturer: 'Honda' },
      { id: 5, model: 'Ninja1000RR', manufacturer: 'Kawasaki' }
    ];

    return { bikes };
  }

}
