import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodTruckApiService } from 'src/app/food-truck-api.service';


@Component({
  selector: 'app-add-edit-food-truck',
  templateUrl: './add-edit-food-truck.component.html',
  styleUrls: ['./add-edit-food-truck.component.css']
})
export class AddEditFoodTruckComponent implements OnInit {

  FoodTruckList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  FoodTruckTypeList$!: Observable<any[]>;

  constructor(private service:FoodTruckApiService) { }


  @Input() FoodTruck:any;
  id: number = 0;
  status: string = " ";
  latitude: number = 0.0;
  longitude: number = 0.0;
  FoodTruckTypeId!: number;


  ngOnInit(): void {
    this.id = this.FoodTruck.id;
    this.status = this.FoodTruck.status;
    this.latitude = this.FoodTruck.latitude;
    this.longitude = this.FoodTruck.longitude;
    this.FoodTruckList$ = this.service.getFoodTruckList();
    this.statusList$ = this.service.getStatusList();
    this.FoodTruckTypeList$ = this.service.getFoodTruckTypeList();

  }


addFoodTruck()
{

}

editFoodTruck()
{

}


}
