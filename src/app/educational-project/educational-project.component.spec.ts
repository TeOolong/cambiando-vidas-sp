import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalProjectComponent } from './educational-project.component';

describe('EducationalProjectComponent', () => {
  let component: EducationalProjectComponent;
  let fixture: ComponentFixture<EducationalProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
