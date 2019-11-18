import { TestBed } from '@angular/core/testing';

import { ComarcapossuiService } from './comarcapossui.service';

describe('ComarcapossuiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComarcapossuiService = TestBed.get(ComarcapossuiService);
    expect(service).toBeTruthy();
  });
});
