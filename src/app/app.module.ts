import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CourseComponent } from './components/course/course.component';
import { StatComponent } from './components/stat/stat.component';
import { LucideAngularModule } from 'lucide-angular';
import { CertVerificationComponent } from './components/cert-verification/cert-verification.component';
import { FormsModule } from '@angular/forms';
import { AddCertificateComponent } from './components/add-certificate/add-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FeatureComponent,
    CourseComponent,
    StatComponent,
    CertVerificationComponent,
    AddCertificateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
