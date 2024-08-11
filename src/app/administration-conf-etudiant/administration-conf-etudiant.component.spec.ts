import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationConfEtudiantComponent } from './administration-conf-etudiant.component';

describe('AdministrationConfEtudiantComponent', () => {
  let component: AdministrationConfEtudiantComponent;
  let fixture: ComponentFixture<AdministrationConfEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministrationConfEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrationConfEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
