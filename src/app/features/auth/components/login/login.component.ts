import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  isLoading: boolean = false;

  constructor(private authService: FirebaseAuthService) {}

  async onSubmit() {
    this.isLoading = true;
    this.error = '';

    try {
      await this.authService.signIn(this.email, this.password);
      console.log('Logged in successfully');
      // You might want to redirect the user or update the UI here
    } catch (error) {
      this.error = 'Failed to log in. Please check your credentials and try again.';
      console.error('Login error:', error);
    } finally {
      this.isLoading = false;
    }
  }
}


