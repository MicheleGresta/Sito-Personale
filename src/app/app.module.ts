//material components
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
//--
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProgettiComponent } from './components/progetti/progetti.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { FizzbuzzComponent } from './components/fizzbuzz/fizzbuzz.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    ProgettiComponent,
    CurriculumComponent,
    FizzbuzzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
