import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-slider',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'] 
})
export class SliderComponent {
  @Input() images: string[] = [];
}
