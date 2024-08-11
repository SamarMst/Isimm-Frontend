import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProfesseurComponent } from './signup-professeur.component';

describe('SignupProfesseurComponent', () => {
  let component: SignupProfesseurComponent;
  let fixture: ComponentFixture<SignupProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupProfesseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
