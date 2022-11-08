import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProjectComponent } from './health-project.component';

describe('HealthProjectComponent', () => {
  let component: HealthProjectComponent;
  let fixture: ComponentFixture<HealthProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
