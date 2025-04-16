import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-nintendo-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './nintendo-page.component.html',
  styleUrl: './nintendo-page.component.css'
})
export class NintendoPageComponent { }

