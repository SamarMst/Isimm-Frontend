import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousportraitComponent } from './tousportrait.component';

describe('TousportraitComponent', () => {
  let component: TousportraitComponent;
  let fixture: ComponentFixture<TousportraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TousportraitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TousportraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
