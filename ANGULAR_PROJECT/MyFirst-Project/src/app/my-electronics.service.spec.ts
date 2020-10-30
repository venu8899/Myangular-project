import { TestBed } from '@angular/core/testing';

import { MyElectronicsService } from './my-electronics.service';

describe('MyElectronicsService', () => {
  let service: MyElectronicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyElectronicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
