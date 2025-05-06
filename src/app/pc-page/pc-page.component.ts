import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SliderComponent } from '../slider/slider.component';


@Component({
  selector: 'app-pc-page',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './pc-page.component.html',
  styleUrls: ['./pc-page.component.css']
})
export class PcPageComponent {
  pcSlides = [
    '/assets/pc/slider/fable.webp',
    '/assets/pc/slider/mafia.jpg',
    '/assets/pc/slider/avowed.jpg'
  ];
}
