import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  providers: [CurrencyPipe],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>('assets/data/productos.json').subscribe(data => {
      this.producto = data.producto.find((p: any) => p.id === id);
      console.log('Producto encontrado:', this.producto);
    });
  }
}



