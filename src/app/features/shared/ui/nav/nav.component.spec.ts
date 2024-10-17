import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { AuthService } from '../../../auth/services/auth.service';
import { computed, signal, Signal } from '@angular/core';
import { onAuthStateChanged, User } from 'firebase/auth';
 
describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let mockAuthService: jest.Mocked<AuthService>;
  let mockCurrentUserSignal = signal<User | null>(null);
  let mockAuthSignal = signal<boolean>(false);

  beforeEach(async () => {

    mockAuthService = {
      currentUser: jest.fn().mockReturnValue(mockCurrentUserSignal),
      isAuthenticated: jest.fn().mockResolvedValue(mockAuthSignal),
      signIn: jest.fn().mockResolvedValue(true),
      signUp: jest.fn().mockResolvedValue(true),
      signOut: jest.fn().mockResolvedValue(undefined)
    } as unknown as jest.Mocked<AuthService>;

    await TestBed.configureTestingModule({
      imports: [NavComponent],
      providers: [
        // Provide the mock service instead of the real one
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show logout button if logged in', async () => {

    // Simulate user login
    mockAuthSignal.set(true);
    mockCurrentUserSignal.set({email: 'email@email.com'} as User);
    
    // Now should be authenticated
    let authed = mockAuthService.isAuthenticated();
  
    const buttonElement: HTMLElement = fixture.nativeElement;
    const button = buttonElement.querySelector('button')!;

    expect(button).toBeTruthy();
    
  });

  it('shouldn\'t show logout button if not logged in', async () => {

    // Simulate user logout
    mockAuthSignal.set(false);
    
    // Now should not be authenticated
    let authed = mockAuthService.isAuthenticated();
  
    const buttonElement: HTMLElement = fixture.nativeElement;
    const button = buttonElement.querySelector('button')!;

    expect(button).toBeFalsy();
    
  });
});
