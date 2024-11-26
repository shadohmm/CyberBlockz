import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertVerificationComponent } from './cert-verification.component';

describe('CertVerificationComponent', () => {
  let component: CertVerificationComponent;
  let fixture: ComponentFixture<CertVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
