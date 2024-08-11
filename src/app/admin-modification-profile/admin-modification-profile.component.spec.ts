import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModificationProfileComponent } from './admin-modification-profile.component';

describe('AdminModificationProfileComponent', () => {
  let component: AdminModificationProfileComponent;
  let fixture: ComponentFixture<AdminModificationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminModificationProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminModificationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
