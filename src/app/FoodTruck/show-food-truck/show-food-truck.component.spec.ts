import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFoodTruckComponent } from './show-food-truck.component';

describe('ShowFoodTruckComponent', () => {
  let component: ShowFoodTruckComponent;
  let fixture: ComponentFixture<ShowFoodTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFoodTruckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
