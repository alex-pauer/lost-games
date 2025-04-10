import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() title: string = 'LOST GAMES';
  @Input() description: string = 'Los Games más Lost de internet.<br>bibubip';
  @Input() buttonText?: string;
  @Input() buttonLink?: string;
  @Input() customClass?: string;
}
