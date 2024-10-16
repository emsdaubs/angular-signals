import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './features/auth/ui/login/login.component';
import { NavComponent } from "./features/shared/ui/nav/nav.component"; 


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LoginComponent, RouterOutlet, NavComponent],
})
export class AppComponent {
  title = 'angular-signals';

 
}
