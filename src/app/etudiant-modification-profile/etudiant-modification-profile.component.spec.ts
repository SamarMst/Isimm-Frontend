import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantModificationProfileComponent } from './etudiant-modification-profile.component';

describe('EtudiantModificationProfileComponent', () => {
  let component: EtudiantModificationProfileComponent;
  let fixture: ComponentFixture<EtudiantModificationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantModificationProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantModificationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
