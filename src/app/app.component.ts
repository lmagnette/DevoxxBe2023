import { Component } from '@angular/core';
import { NavbarComponent } from './features/navigation/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
  title = 'DevoxxBe2023';
}
