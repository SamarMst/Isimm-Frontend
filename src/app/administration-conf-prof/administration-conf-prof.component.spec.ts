import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationConfProfComponent } from './administration-conf-prof.component';

describe('AdministrationConfProfComponent', () => {
  let component: AdministrationConfProfComponent;
  let fixture: ComponentFixture<AdministrationConfProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministrationConfProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrationConfProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
