import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent]
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

    component.isAuthenticated = true;

    const buttonElement: HTMLElement = fixture.nativeElement;
    const button = buttonElement.querySelector('button')!;

    expect(button).toBeTruthy;
    
  });
});
