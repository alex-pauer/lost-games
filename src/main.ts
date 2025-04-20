import { bootstrapApplication } from '@angular/platform-browser';
import { CatalogoProductosComponent } from './app/components/catalogo-productos/catalogo-productos.component';
import { ProductoService } from './app/services/producto.service';
import { provideRouter } from '@angular/router';

bootstrapApplication(CatalogoProductosComponent, {
  providers: [ProductoService, provideRouter([])]
})
  .catch((err) => console.error(err));
