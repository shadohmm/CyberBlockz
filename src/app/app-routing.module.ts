import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CertVerificationComponent } from './components/cert-verification/cert-verification.component';
import { AddCertificateComponent } from './components/add-certificate/add-certificate.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'certverification', component:CertVerificationComponent},
  {path: 'addcertificate', component:AddCertificateComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
