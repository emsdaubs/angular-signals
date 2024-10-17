import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User 
} from 'firebase/auth';
import { signal, computed } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth;
  private currentUserSignal = signal<User | null>(null);

  public currentUser = computed(() => this.currentUserSignal());
  public isAuthenticated = computed(() => !!this.currentUserSignal());

  constructor() {
    // Initialize Firebase app
    console.log(`firebase init`);
    const app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(app);

    // Set up auth state listener
    onAuthStateChanged(this.auth,(user) => {
      console.log(`auth state changed user:${user}`);
      this.currentUserSignal.set(user);
    });
  }

  async signIn(email: string, password: string): Promise<boolean> {
    try {
      const result =await signInWithEmailAndPassword(this.auth, email, password);
      if(result.user!=null)
      {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error;
    }
  }

  async signUp(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Sign-up error:', error);
      throw error;
    }
  }

  async signOut(): Promise<void> {
    try {
      console.log("signing out");
      await signOut(this.auth);
    } catch (error) {
      console.error('Sign-out error:', error);
      throw error;
    }
  }
}