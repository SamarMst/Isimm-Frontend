import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipaleAdministrationComponent } from './page-principale-administration.component';

describe('PagePrincipaleAdministrationComponent', () => {
  let component: PagePrincipaleAdministrationComponent;
  let fixture: ComponentFixture<PagePrincipaleAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePrincipaleAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePrincipaleAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
