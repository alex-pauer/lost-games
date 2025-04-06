import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'pc-page',
    loadComponent: () => import('./pc-page/pc-page.component').then(m => m.PcPageComponent)
  }
];
