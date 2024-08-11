import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPageProfComponent } from './navbar-page-prof.component';

describe('NavbarPageProfComponent', () => {
  let component: NavbarPageProfComponent;
  let fixture: ComponentFixture<NavbarPageProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarPageProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarPageProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
