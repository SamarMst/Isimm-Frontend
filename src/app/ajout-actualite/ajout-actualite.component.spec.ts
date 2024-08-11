import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutActualiteComponent } from './ajout-actualite.component';

describe('AjoutActualiteComponent', () => {
  let component: AjoutActualiteComponent;
  let fixture: ComponentFixture<AjoutActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutActualiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
