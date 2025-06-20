import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Home/Home.component';
import { CarouselModule } from 'primeng/carousel';
import { BsSliderComponent } from './Components/bs-slider/bs-slider.component';
import { CompañiaComponent } from './Compañia/Compañia.component';
import { AffinityProComponent } from './AffinityPro/AffinityPro.component';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';

@NgModule({ declarations: [			
      AppComponent,
      HomeComponent,
      BsSliderComponent,
      CompañiaComponent,
      AffinityProComponent,
   ],
    bootstrap: [AppComponent], imports: [CommonModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule, NgbModule, DropdownModule, CarouselModule, DialogModule, MenubarModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
