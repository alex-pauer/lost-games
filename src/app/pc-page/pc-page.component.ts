import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-pc-page',
  standalone: true, 
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './pc-page.component.html',
  styleUrls: ['./pc-page.component.css']
})
export class PcPageComponent {}