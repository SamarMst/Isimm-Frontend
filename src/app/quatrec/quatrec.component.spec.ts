import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatrecComponent } from './quatrec.component';

describe('QuatrecComponent', () => {
  let component: QuatrecComponent;
  let fixture: ComponentFixture<QuatrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuatrecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuatrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
