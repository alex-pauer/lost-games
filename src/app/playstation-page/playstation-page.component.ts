import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductCardComponent } from '../product-card/product-card.component';
import { SliderComponent } from '../slider/slider.component'; 

@Component({
  selector: 'app-playstation-page',
  standalone: true, 
  imports: [CommonModule, ProductCardComponent, SliderComponent],
  templateUrl: './playstation-page.component.html',
  styleUrl: './playstation-page.component.css'
})
export class PlaystationPageComponent {
  pcSlides = [
    '../../../assets/play/slider/ds2.jpg',
    '../../../assets/play/slider/ghostOfYotei.webp',
    '/../../../assets/play/slider/LobeznoGame.jpg'
  ];
}
