// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Slide {
  image: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Your component logic here
  currentSlide = 0;
  
  slides: Slide[] = [
    { image: 'assets/images/pc/slider/fable.webp', alt: 'Fable' },
    // ... other slides
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Initialization code
  }

  // Your methods here
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}