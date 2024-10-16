import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/ui/login/login.component';
import { HomeComponent } from './features/home/ui/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];
