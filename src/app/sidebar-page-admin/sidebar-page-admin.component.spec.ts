import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPagaAdminComponent } from './sidebar-page-admin.component';

describe('SidebarPagaAdminComponent', () => {
  let component: SidebarPagaAdminComponent;
  let fixture: ComponentFixture<SidebarPagaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarPagaAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarPagaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
