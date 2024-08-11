import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipaleProfesseurComponent } from './page-principale-professeur.component';

describe('PagePrincipaleProfesseurComponent', () => {
  let component: PagePrincipaleProfesseurComponent;
  let fixture: ComponentFixture<PagePrincipaleProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePrincipaleProfesseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePrincipaleProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
