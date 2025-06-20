import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home.component';


const Approutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(Approutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
