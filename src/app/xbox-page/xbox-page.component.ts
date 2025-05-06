import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-xbox-page',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './xbox-page.component.html',
  styleUrls: ['./xbox-page.component.css']
})
export class XboxPageComponent {
  pcSlides = [
    '/assets/xbox/PerfectDark.jpg',
    '/assets/xbox/gears-of-war-e-day.webp',
    '/assets/xbox/doomTDA.jpg'
  ];
}
