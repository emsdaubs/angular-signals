import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, User, onAuthStateChanged } from 'firebase/auth';

// Mock Firebase modules
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn()
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  User: jest.fn(),
  onAuthStateChanged:jest.fn()
}));

describe('AuthService', () => {
  let service: AuthService;
  let mockAuth: any;

  beforeEach(() => {
    mockAuth = {
      currentUser: null,
    };

    (getAuth as jest.Mock).mockReturnValue(mockAuth);


    TestBed.configureTestingModule({

      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize Firebase app', () => {
    expect(initializeApp).toHaveBeenCalled();
  });

  describe('signIn', () => {
    it('should sign in successfully', async () => {
      const mockUser = { email: 'test@example.com' } as User;
      (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({ user: mockUser });

      await service.signIn('test@example.com', 'password');

      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, 'test@example.com', 'password');
      expect(service.currentUser()).toEqual(mockUser);
      expect(service.isAuthenticated()).toBe(true);
    });

    it('should handle sign in error', async () => {
      const mockError = new Error('Auth error');
      (signInWithEmailAndPassword as jest.Mock).mockRejectedValue(mockError);
      try {
        await service.signIn('test@example.com', 'wrongpassword');
        fail('Expected signIn to throw an error');
      } catch (error) {
        expect(error).toEqual(mockError);
      }
      expect(service.isAuthenticated()).toBe(false);
    });
  });
});
