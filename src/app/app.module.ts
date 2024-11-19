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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FeatureComponent,
    CourseComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
