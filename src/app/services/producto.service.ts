import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto'; 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 10, imagen: 'ruta_imagen_1' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 15, imagen: 'ruta_imagen_2' },
    
  ];

  constructor() { }

  getProductos(): Observable<Producto[]> {
    return of(this.productos);  
  }

 
  getProducto(id: number): Observable<Producto> {
    const producto = this.productos.find(p => p.id === id);
    return of(producto!);  
  }
}
