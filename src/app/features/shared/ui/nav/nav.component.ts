import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  public currentUser;
  public isAuthenticated;;

  constructor(public authService: AuthService) {
    this.currentUser = authService.currentUser;
    this.isAuthenticated = authService.isAuthenticated();
  }

  async logout(): Promise<void> {
    this.authService.signOut();

  }
}
