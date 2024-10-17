import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/ui/login/login.component';
import { HomeComponent } from './features/home/ui/home.component';
import { AccountComponent } from './features/account/ui/account/account.component';
import { AuthGuardService } from './features/auth/services/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardService]}
];
