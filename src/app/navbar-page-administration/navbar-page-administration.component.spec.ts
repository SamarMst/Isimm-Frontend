import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPageAdministrationComponent } from './navbar-page-administration.component';

describe('NavbarPageAdministrationComponent', () => {
  let component: NavbarPageAdministrationComponent;
  let fixture: ComponentFixture<NavbarPageAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarPageAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarPageAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
