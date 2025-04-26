import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SliderComponent } from '../slider/slider.component';


@Component({
  selector: 'app-nintendo-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SliderComponent],
  templateUrl: './nintendo-page.component.html',
  styleUrl: './nintendo-page.component.css'
})
export class NintendoPageComponent { 
  pcSlides = [
    '/assets/nintendo/Metroid-Prime-4-Beyond.webp',
        '/assets/nintendo/ns2.webp',
        '/assets/nintendo/xenobladeX.jpg'
  ];
}

