import { TestBed, inject } from '@angular/core/testing';

import { BikesDatabaseService } from './bikes-database.service';

describe('BikesDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikesDatabaseService]
    });
  });

  it('should ...', inject([BikesDatabaseService], (service: BikesDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
