import { Component } from '@angular/core';
import { CertVerificationService } from '../../services/cert-verification.service';

@Component({
  selector: 'app-cert-verification',
  templateUrl: './cert-verification.component.html',
  styleUrl: './cert-verification.component.css'
})
export class CertVerificationComponent {
  formData = {
    id: '',
  };
  verificationStatus: 'success' | 'error' | null = null;
  errors = {
    id: ''
  };

  constructor(private verifyCertService:CertVerificationService) { }

  ngOnInit(): void {}

  // Simulate API check - replace with actual API call
  verifyId(id: string) {
    let isValid = false;
    if(this.verifyCertService.checkCertIdValid(id)){
      isValid = true;
    } else {
      isValid = false;
    }
    this.verificationStatus = isValid ? 'success' : 'error';

    setTimeout(() => this.verificationStatus = null, 3000);
  }

  validateForm(): boolean {
    let isValid = true;
    if (!this.formData.id.trim()) {
      this.errors.id = 'ID is required';
      isValid = false;
    } else if (!/^[a-zA-Z0-9]{20}$/.test(this.formData.id)) {
      this.errors.id = 'ID must be exactly 64 characters';
      isValid = false;
    } else {
      this.errors.id = '';
    }
    return isValid;
  }

  onSubmit(): void {
    if (this.validateForm()) {
      this.verifyId(this.formData.id);
    }
  }

}
