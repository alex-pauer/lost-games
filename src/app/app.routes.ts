import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    title: 'HOME'
  },
  {
    path: 'pc-page',
    loadComponent: () => import('./pc-page/pc-page.component').then(m => m.PcPageComponent),
    title: 'PC'
  },
  {
    path: 'playstation',
    loadComponent: () => import('./playstation-page/playstation-page.component').then(m => m.PlaystationPageComponent),
    title: 'PlayStation'
  },
  { 
    path: 'nintendo',
    loadComponent: () => import('./nintendo-page/nintendo-page.component').then(m => m.NintendoPageComponent),
    title: 'Nintendo'
  },
  {
    path: 'xbox',
    loadComponent: () => import('./xbox-page/xbox-page.component').then(m => m.XboxPageComponent),
    title: 'Xbox'
  },
  { 
    path: 'cart',
    loadComponent: () => import('./cesta-page/cesta-page.component').then(m => m.CestaPageComponent),
    title: 'Cesta'
  },
  { 
    path: 'account',
    loadComponent: () => import('./user-page/user-page.component').then(m => m.UserPageComponent),
    title: 'Cuenta'
  },
  { 
    path: 'producto/:id',  // json test
    loadComponent: () => import('./components/catalogo-productos/catalogo-productos.component').then(m => m.CatalogoProductosComponent),
    title: 'Producto'
  },
  { 
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Página no encontrada'
  }  
];
