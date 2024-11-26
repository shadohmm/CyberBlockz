import { TestBed } from '@angular/core/testing';

import { CertVerificationService } from './cert-verification.service';

describe('CertVerificationService', () => {
  let service: CertVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
