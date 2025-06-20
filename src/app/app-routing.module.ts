import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompañiaComponent } from './Compañia/Compañia.component';
import { AffinityProComponent } from './AffinityPro/AffinityPro.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Home/Home.module').then(c => c.HomeModule),
  },
  {
    path: 'compañia',
    component: CompañiaComponent,
  },
  {
    path: 'soluciones-tecnologicas',
    component: AffinityProComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' 
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
