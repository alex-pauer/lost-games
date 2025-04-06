import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { PcPageComponent } from './pc-page/pc-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, PcPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lost-games';
}
