import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import  { FoodTruckApiService } from 'src/app/food-truck-api.service';

@Component({
  selector: 'app-show-food-truck',
  templateUrl: './show-food-truck.component.html',
  styleUrls: ['./show-food-truck.component.css']
})
export class ShowFoodTruckComponent implements OnInit {

  FoodTruckList$!:Observable<any[]>;
  FoodTruckTypeList$!:Observable<any[]>;
  FoodTruckTypeList:any=[];

  FoodTruckTypesMap:Map<number,string > = new Map();

  constructor(private service:FoodTruckApiService) { }

  ngOnInit(): void {
    this.FoodTruckList$ = this.service.getFoodTruckList();
    this.FoodTruckTypeList$ = this.service.getFoodTruckTypeList();
    this.refreshFoodTruckTypesMap();
  }


ModalTitle:string = '';
activateaddeditfoodtruckcomponent:boolean = false;
foodtruck:any;

modalAdd()
{
  this.foodtruck = {
    id:0,
    status:null,
    latitude:0.0,
    longitude:0.0,
    FoodTruckTypeID:null
  }
  this.ModalTitle = 'ADD FOOD TRUCK';
  this.activateaddeditfoodtruckcomponent =true;
}


  refreshFoodTruckTypesMap() {
    this.service.getFoodTruckTypeList().subscribe(data => {
      this.FoodTruckTypeList = data; 
      for(let i =0; i <data.length; i++)
      {
        this.FoodTruckTypesMap.set(this.FoodTruckTypeList[i].id, this.FoodTruckTypeList[i].foodTruckName)
      }
    }); 
  }
}
