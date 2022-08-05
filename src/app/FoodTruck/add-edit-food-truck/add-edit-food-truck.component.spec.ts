import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFoodTruckComponent } from './add-edit-food-truck.component';

describe('AddEditFoodTruckComponent', () => {
  let component: AddEditFoodTruckComponent;
  let fixture: ComponentFixture<AddEditFoodTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFoodTruckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
