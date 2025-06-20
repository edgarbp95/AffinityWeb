import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './Home.routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';

@NgModule({ declarations: [],
    exports: [], imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HomeRoutingModule, CarouselModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class HomeModule {}
