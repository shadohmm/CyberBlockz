import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertVerificationService {
  certIds: string[] = ['973d7f9efc06ba81112bceb8205309ff0f49c303c28914a1dcf143d86a1b15b4'];
  checkCertIdValid(id: string): boolean {
    return this.certIds.includes(id);
  }

  deleteCertId(id: string) {
    const index = this.certIds.indexOf(id);
    if (index > -1) {
      this.certIds.splice(index, 1);
      console.log(`Deleted ID: ${id}`);
      return true;
    } else {
      console.log(`ID: ${id} not present`); 
      return false;
    }
  }

  addCertId(id: string) {
    console.log("inside adddserve",id);
     if (this.checkCertIdValid(id)) {
       this.certIds.push(id); 
       console.log(`Added ID: ${id}`); 
       return true;
      } else {
        console.log(`ID: ${id} already exists`);
        return false;
      }
  }
}
