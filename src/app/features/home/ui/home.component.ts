import { Component, signal } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private currentUserSignal = signal<User | null>(null);
  public  currentUser;
  
  constructor(public authService: AuthService) {
    this.currentUser = authService.currentUser;
  }

}
