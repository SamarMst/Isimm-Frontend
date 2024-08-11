import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPageProfComponent } from './sidebar-page-prof.component';

describe('SidebarPageProfComponent', () => {
  let component: SidebarPageProfComponent;
  let fixture: ComponentFixture<SidebarPageProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarPageProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarPageProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
