/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenericEmiterService } from './generic-emiter.service';

describe('Service: GenericEmiter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericEmiterService]
    });
  });

  it('should ...', inject([GenericEmiterService], (service: GenericEmiterService) => {
    expect(service).toBeTruthy();
  }));
});
