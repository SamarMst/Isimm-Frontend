import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAdministrationComponent } from './signup-administration.component';

describe('SignupAdministrationComponent', () => {
  let component: SignupAdministrationComponent;
  let fixture: ComponentFixture<SignupAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
