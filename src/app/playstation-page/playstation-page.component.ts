import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-playstation-page',
  standalone: true, 
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './playstation-page.component.html',
  styleUrl: './playstation-page.component.css'
})
export class PlaystationPageComponent {

}
