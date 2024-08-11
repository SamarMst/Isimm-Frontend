import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SottoheaderComponent } from './sottoheader.component';

describe('SottoheaderComponent', () => {
  let component: SottoheaderComponent;
  let fixture: ComponentFixture<SottoheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SottoheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SottoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
