import { TestBed, inject } from '@angular/core/testing';

import { PlacedetailsService } from './placedetails.service';

describe('PlacedetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlacedetailsService]
    });
  });

  it('should be created', inject([PlacedetailsService], (service: PlacedetailsService) => {
    expect(service).toBeTruthy();
  }));
});
