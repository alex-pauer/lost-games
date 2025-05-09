import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductoService } from './app/services/producto.service';
import { routes } from './app/app.routes'; 

bootstrapApplication(AppComponent, {
  providers: [
    ProductoService,
    provideRouter(routes),        
    provideHttpClient(withFetch())
  ]
}).catch((err) => console.error(err));

