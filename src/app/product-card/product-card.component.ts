import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true, // <-- Добавь эту строку
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
}
