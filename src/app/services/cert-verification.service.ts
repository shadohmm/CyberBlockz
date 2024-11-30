import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertVerificationService {
  certIds: string[] = [
    'jdkf8qntoawrzxplmb93',
    'pqrz8nwojakmlfdxtb93',
    'lnxprfjotkwzabqm89d3',
    'mqtnxozlfj8kd9rwabp3',
    'zpjf8rxntolkmbwqad93',
    'tnwolqjz8mxrkdabpf93',
    'nltzfj8rwkopxqmab93d',
    'xmqfj8ltwnorzakbpd93',
    'bmlf8rntoxpjwqazkd93',
    'zpn8ltwrfjokadxmbq93',
    'blrf8njopxmtzwqkad93',
    'xmkqntz8rjoawplbfd93',
    'txjrwolzpnqmfkab8d93',
    'pbfm8nqtwjrokadzxl93',
    'mqfzj8xlnortwpabd93k',
    'nplfr8mxqtwjokzbda93',
    'txzrnwjlf8opkdqabm93',
    'blxrz8nfqojmtpwka93d',
    'pmlxntzrqfj8okbwda93',
    'jrnltfwqmxzopkabd893'
  ];
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
