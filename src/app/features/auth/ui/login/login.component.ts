import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    this.isLoading = true;
    this.error = '';

    try {
      const result = await this.authService.signIn(this.email, this.password);
      if (result) {
        console.log('Logged in successfully');
        this.router.navigate(['home']);
      }
      // You might want to redirect the user or update the UI here
    } catch (error) {
      this.error =
        'Failed to log in. Please check your credentials and try again.';
      console.error('Login error:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
