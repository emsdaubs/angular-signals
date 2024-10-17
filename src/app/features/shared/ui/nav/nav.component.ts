import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  public currentUser;
  public isAuthenticated;;

  constructor(public authService: AuthService, private router: Router) {
    this.currentUser = authService.currentUser;
    this.isAuthenticated = authService.isAuthenticated;
    
  }

  async logout(): Promise<void> {
    this.authService.signOut();
    this.router.navigate(['login']);

  }
}
