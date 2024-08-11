import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPrincipaleComponent } from './student-principale.component';

describe('StudentPrincipaleComponent', () => {
  let component: StudentPrincipaleComponent;
  let fixture: ComponentFixture<StudentPrincipaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentPrincipaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
