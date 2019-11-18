import { TestBed } from '@angular/core/testing';

import { ServicologinService } from './servicologin.service';

describe('ServicologinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicologinService = TestBed.get(ServicologinService);
    expect(service).toBeTruthy();
  });
});
