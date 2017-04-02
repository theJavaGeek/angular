import { TestBed, inject } from '@angular/core/testing';

import { BikeService } from './bike.service';

describe('BikeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikeService]
    });
  });

  it('should ...', inject([BikeService], (service: BikeService) => {
    expect(service).toBeTruthy();
  }));
});
