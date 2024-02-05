import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenupComponent } from './contenup.component';

describe('ContenupComponent', () => {
  let component: ContenupComponent;
  let fixture: ComponentFixture<ContenupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
