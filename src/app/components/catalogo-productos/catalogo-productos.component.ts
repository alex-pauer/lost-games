import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductoI } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CatalogoProductosComponent implements OnInit {
  productCata?: ProductoI;
  constructor(private productoService: ProductoService) { }
  ngOnInit(): void {
    this.loadData();
  }

   loadData() {
    this.productoService.getProductos().subscribe(
      {
        next: (data)=>{
          this.productCata = data;
        }
      }
    )
  }


}

