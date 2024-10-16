import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AuthService } from './app/features/auth/services/auth.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(
  AppComponent, {
  providers: [
    AuthService,
    provideRouter(routes),
  ]
}).catch(err => console.error(err));
