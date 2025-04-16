import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component'; 

@Component({
  selector: 'app-xbox-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './xbox-page.component.html',
  styleUrls: ['./xbox-page.component.css']
})
export class XboxPageComponent {

}
