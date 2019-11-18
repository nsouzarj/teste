import { TestBed } from '@angular/core/testing';

import { ServicousuarioService } from './servicousuario.service';

describe('ServicousuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicousuarioService = TestBed.get(ServicousuarioService);
    expect(service).toBeTruthy();
  });
});
