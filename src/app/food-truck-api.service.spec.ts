import { TestBed } from '@angular/core/testing';

import { FoodTruckApiService } from './food-truck-api.service';

describe('FoodTruckApiService', () => {
  let service: FoodTruckApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodTruckApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
