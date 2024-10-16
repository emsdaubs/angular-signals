import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AuthService } from './app/features/auth/services/auth.service';

bootstrapApplication(AppComponent, {
  providers: [
    AuthService
  ]
}).catch(err => console.error(err));
