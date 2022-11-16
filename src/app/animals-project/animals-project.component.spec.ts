import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsProjectComponent } from './animals-project.component';

describe('AnimalsProjectComponent', () => {
  let component: AnimalsProjectComponent;
  let fixture: ComponentFixture<AnimalsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
