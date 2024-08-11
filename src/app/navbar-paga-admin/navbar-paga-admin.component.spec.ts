import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPagaAdminComponent } from './navbar-paga-admin.component';

describe('NavbarPagaAdminComponent', () => {
  let component: NavbarPagaAdminComponent;
  let fixture: ComponentFixture<NavbarPagaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarPagaAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarPagaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
