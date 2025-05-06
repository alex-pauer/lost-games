// producto.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private http : HttpClient) { }

  // Пример того, как может выглядеть метод getProductos, который возвращает список продуктов
  getProductos(): Observable<Producto> {
    // const productos: Producto[] = [
    //   { id: 1, nombre: 'SMT Devil Survivor', descripcion: 'RPG japonesa con una historia intensa y combate por turnos estilizado.', precio: 199.99, imagen: '/assets/index/smtDevil.jpg' },
    //   { id: 2, nombre: 'Angry Birds Space', descripcion: 'Un juego de puzzles que lleva a los Angry Birds al espacio.', precio: 10.99, imagen: '/assets/index/juegos/angry space.jpg' },
    //   { id: 3, nombre: 'Beat the Beat Rhythm Paradise', descripcion: 'Un juego de ritmo con una divertida variedad de mini juegos.', precio: 15.99, imagen: '/assets/index/juegos/beat the beat.jpg' },
    //   { id: 4, nombre: 'Camera Cafe', descripcion: 'Un juego de simulación con un toque de humor.', precio: 20.99, imagen: '/assets/index/juegos/camera cafe.png' },
    //   { id: 5, nombre: 'Los Simpsons', descripcion: 'Un juego basado en los personajes de la famosa serie.', precio: 12.99, imagen: '/assets/index/juegos/die simpsons das spiel.jpg' },
    //   { id: 6, nombre: 'Seaman', descripcion: 'Un juego único con simulación de vida y un pez virtual.', precio: 12.99, imagen: '/assets/index/juegos/seaman.jpg' },
    //   { id: 7, nombre: 'Nuevo Producto1', descripcion: 'Acción y exploración en un mundo abierto creado por FromSoftware.', precio: 59.99, imagen: '/assets/img/eldenring.jpg' },
    //   { id: 8, nombre: 'Nuevo Producto2', descripcion: 'Roguelike dinámico con ambientación mitológica y narrativa profunda.', precio: 24.99, imagen: '/assets/img/hades.jpg' },
    //   { id: 9, nombre: 'Nuevo Producto3', descripcion: 'Run & gun clásico con estilo visual de los años 30 y dificultad elevada.', precio: 17.99, imagen: '/assets/img/cuphead.jpg' }
    // ];
    return this.http.get<Producto>('data/productos.json');
  }
}

