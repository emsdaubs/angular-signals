import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

    private authService = inject(AuthService);
    private router = inject(Router);

 
  canActivate: CanActivateFn = () => {
    console.log('guard called');

    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated===true) {
      console.log('authenticated - don\'t redirect');
      return true;
    } else {
      // Redirect to login page if not authenticated
       console.log('not authenticated - redirect');
      //return router.createUrlTree(['/login']);
      return this.router.navigateByUrl('login');
    }
  };
}
