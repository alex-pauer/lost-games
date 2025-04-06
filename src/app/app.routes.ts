import { Routes } from '@angular/router';
import { PcPageComponent } from './pc-page/pc-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { 
      path: 'home', 
      loadComponent: () => import('./app.component').then(m => m.AppComponent) 
    }
];
