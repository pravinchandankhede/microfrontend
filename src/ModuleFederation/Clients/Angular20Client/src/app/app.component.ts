import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styles: [`
    .navbar { margin-bottom: 20px; }
    .active { font-weight: bold; }
  `]
})
export class AppComponent {
  title = 'angular20-client';
}
