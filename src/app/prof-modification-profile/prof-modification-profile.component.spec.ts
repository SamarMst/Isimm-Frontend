import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfModificationProfileComponent } from './prof-modification-profile.component';

describe('ProfModificationProfileComponent', () => {
  let component: ProfModificationProfileComponent;
  let fixture: ComponentFixture<ProfModificationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfModificationProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfModificationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
