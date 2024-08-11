import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheoffreComponent } from './afficheoffre.component';

describe('AfficheoffreComponent', () => {
  let component: AfficheoffreComponent;
  let fixture: ComponentFixture<AfficheoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfficheoffreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfficheoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
