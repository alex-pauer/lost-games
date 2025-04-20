// producto.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  // Пример того, как может выглядеть метод getProductos, который возвращает список продуктов
  getProductos(): Observable<Producto[]> {
    const productos: Producto[] = [
      { id: 1, nombre: 'SMT Devil Survivor', descripcion: 'RPG japonesa con una historia intensa y combate por turnos estilizado.', precio: 199.99, imagen: '/assets/img/persona5.jpg' },
      { id: 2, nombre: 'Elden Ring', descripcion: 'Acción y exploración en un mundo abierto creado por FromSoftware.', precio: 59.99, imagen: '/assets/img/eldenring.jpg' },
      { id: 3, nombre: 'Hades', descripcion: 'Roguelike dinámico con ambientación mitológica y narrativa profunda.', precio: 24.99, imagen: '/assets/img/hades.jpg' },
      { id: 4, nombre: 'Celeste', descripcion: 'Plataformas desafiante con una historia emotiva sobre superación personal.', precio: 19.99, imagen: '/assets/img/celeste.jpg' },
      { id: 5, nombre: 'Cuphead', descripcion: 'Run & gun clásico con estilo visual de los años 30 y dificultad elevada.', precio: 17.99, imagen: '/assets/img/cuphead.jpg' },
      { id: 6, nombre: 'Angry Birds Space', descripcion: 'Un juego de puzzles que lleva a los Angry Birds al espacio.', precio: 10.99, imagen: '/assets/index/juegos/angry space.jpg' },
      { id: 7, nombre: 'Beat the Beat Rhythm Paradise', descripcion: 'Un juego de ritmo con una divertida variedad de mini juegos.', precio: 15.99, imagen: '/assets/index/juegos/beat the beat.jpg' },
      { id: 8, nombre: 'Camera Cafe', descripcion: 'Un juego de simulación con un toque de humor.', precio: 20.99, imagen: '/assets/index/juegos/camera cafe.png' },
      { id: 9, nombre: 'Los Simpsons', descripcion: 'Un juego basado en los personajes de la famosa serie.', precio: 12.99, imagen: '/assets/index/juegos/die simpsons das spiel.jpg' },
      { id: 10, nombre: 'Seaman', descripcion: 'Un juego único con simulación de vida y un pez virtual.', precio: 12.99, imagen: '/assets/index/juegos/seaman.jpg' }
    ];
    return of(productos); // Преобразуем массив в Observable с помощью оператора `of`
  }
}

