import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipaleEtudiantComponent } from './page-principale-etudiant.component';

describe('PagePrincipaleEtudiantComponent', () => {
  let component: PagePrincipaleEtudiantComponent;
  let fixture: ComponentFixture<PagePrincipaleEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePrincipaleEtudiantComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagePrincipaleEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
