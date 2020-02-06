import { TestBed } from '@angular/core/testing';

import { MyjobsService } from './myjobs.service';

describe('MyjobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyjobsService = TestBed.get(MyjobsService);
    expect(service).toBeTruthy();
  });
});
