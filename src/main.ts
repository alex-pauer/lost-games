import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // это твой контейнер с router-outlet
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductoService } from './app/services/producto.service';
import { routes } from './app/app.routes'; // убедись, что путь к файлу с маршрутами правильный

bootstrapApplication(AppComponent, {
  providers: [
    ProductoService,
    provideRouter(routes),        // подключаем маршруты!
    provideHttpClient(withFetch())
  ]
}).catch((err) => console.error(err));

