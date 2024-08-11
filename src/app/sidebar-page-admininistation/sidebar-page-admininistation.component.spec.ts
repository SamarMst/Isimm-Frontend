import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPageAdmininistationComponent } from './sidebar-page-admininistation.component';

describe('SidebarPageAdmininistationComponent', () => {
  let component: SidebarPageAdmininistationComponent;
  let fixture: ComponentFixture<SidebarPageAdmininistationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarPageAdmininistationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarPageAdmininistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
