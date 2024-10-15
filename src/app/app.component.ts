import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component'; // Adjust the path as necessary


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LoginComponent,RouterOutlet],
})
export class AppComponent {
  title = 'angular-signals';

 
}
