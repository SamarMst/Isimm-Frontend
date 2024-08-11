import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigupEtudiantComponent } from './sigup-etudiant.component';

describe('SigupEtudiantComponent', () => {
  let component: SigupEtudiantComponent;
  let fixture: ComponentFixture<SigupEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigupEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigupEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
