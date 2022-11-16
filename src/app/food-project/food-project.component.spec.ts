import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProjectComponent } from './food-project.component';

describe('FoodProjectComponent', () => {
  let component: FoodProjectComponent;
  let fixture: ComponentFixture<FoodProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
