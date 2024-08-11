import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsimmComponent } from './isimm.component';

describe('IsimmComponent', () => {
  let component: IsimmComponent;
  let fixture: ComponentFixture<IsimmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsimmComponent]
    });
    fixture = TestBed.createComponent(IsimmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
