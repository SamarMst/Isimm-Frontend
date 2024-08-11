import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationEntreprisesComponent } from './consultation-entreprises.component';

describe('ConsultationEntreprisesComponent', () => {
  let component: ConsultationEntreprisesComponent;
  let fixture: ComponentFixture<ConsultationEntreprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultationEntreprisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultationEntreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
