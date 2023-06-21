import { TestBed } from '@angular/core/testing';

import { TablegridServicesService } from './tablegrid-services.service';

describe('TablegridServicesService', () => {
  let service: TablegridServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablegridServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
