import { TestBed, inject } from '@angular/core/testing';

import { LibraService } from './libra.service';

describe('LibraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraService]
    });
  });

  it('should be created', inject([LibraService], (service: LibraService) => {
    expect(service).toBeTruthy();
  }));
});
