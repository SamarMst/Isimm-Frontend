import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgmenuComponent } from './tgmenu.component';

describe('TgmenuComponent', () => {
  let component: TgmenuComponent;
  let fixture: ComponentFixture<TgmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TgmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TgmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
