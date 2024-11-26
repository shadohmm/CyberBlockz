import { Component } from '@angular/core';
import { CertVerificationService } from '../../services/cert-verification.service';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrl: './add-certificate.component.css'
})
export class AddCertificateComponent {
  formData = {
    id: '',
  };
  verificationStatus: 'success' | 'error' | null = null;
  errors = {
    id: ''
  };

  constructor(private verifyCertService:CertVerificationService) { }

  ngOnInit(): void {}
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
    } else if (!/^[a-zA-Z0-9]{64}$/.test(this.formData.id)) {
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

  addId(id: string): void {
    console.log("iddd",id);
    let isAdded = false;
    if (this.validateForm()){
      if(isAdded = this.verifyCertService.addCertId(id)){
        this.verificationStatus = 'success'
      }
      setTimeout(() => this.verificationStatus = null, 3000);

    }
  }


  deleteId(id: string): void {
    let isDeleted;
    console.log('Deleting ID:', id);
    if(this.validateForm()) {
      if(isDeleted = this.verifyCertService.deleteCertId(id)){
        this.verificationStatus = 'error'
      };
      setTimeout(() => this.verificationStatus = null, 3000);
    }
  }

}