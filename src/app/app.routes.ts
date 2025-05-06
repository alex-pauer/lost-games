import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PcPageComponent } from './pc-page/pc-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogoProductosComponent } from './components/catalogo-productos/catalogo-productos.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CestaPageComponent } from './cesta-page/cesta-page.component';
import { XboxPageComponent } from './xbox-page/xbox-page.component';
import { NintendoPageComponent } from './nintendo-page/nintendo-page.component';
import { PlaystationPageComponent } from './playstation-page/playstation-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
    // loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    // title: 'HOME'
  },
  {
    path: 'pc-page',
    component: PcPageComponent
    // loadComponent: () => import('./pc-page/pc-page.component').then(m => m.PcPageComponent),
    // title: 'PC'
  },
  {
    path: 'playstation',
    component: PlaystationPageComponent
    // loadComponent: () => import('./playstation-page/playstation-page.component').then(m => m.PlaystationPageComponent),
    // title: 'PlayStation'
  },
  {
    path: 'nintendo',
    component: NintendoPageComponent
    // loadComponent: () => import('./nintendo-page/nintendo-page.component').then(m => m.NintendoPageComponent),
    // title: 'Nintendo'
  },
  {
    path: 'xbox',
    component: XboxPageComponent
    // loadComponent: () => import('./xbox-page/xbox-page.component').then(m => m.XboxPageComponent),
    // title: 'Xbox'
  },
  {
    path: 'cart',
    component: CestaPageComponent
    // loadComponent: () => import('./cesta-page/cesta-page.component').then(m => m.CestaPageComponent),
    // title: 'Cesta'
  },
  {
    path: 'account',
    component: UserPageComponent
    // loadComponent: () => import('./user-page/user-page.component').then(m => m.UserPageComponent),
    // title: 'Cuenta'
  },
  //{
    // path: 'producto/:id',  // json test
    // component: CatalogoProductosComponent
    // loadComponent: () => import('./components/catalogo-productos/catalogo-productos.component').then(m => m.CatalogoProductosComponent),
    // title: 'Producto'
  //},
  {
    path: 'producto',  // json test
    component: CatalogoProductosComponent
    // loadComponent: () => import('./components/catalogo-productos/catalogo-productos.component').then(m => m.CatalogoProductosComponent),
    // title: 'Producto'
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent
    // loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    // title: 'Página no encontrada'
  }
];
