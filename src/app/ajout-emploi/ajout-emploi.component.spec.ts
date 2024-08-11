import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEmploiComponent } from './ajout-emploi.component';

describe('AjoutEmploiComponent', () => {
  let component: AjoutEmploiComponent;
  let fixture: ComponentFixture<AjoutEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutEmploiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
