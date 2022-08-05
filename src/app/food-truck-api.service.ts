import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodTruckApiService {

  readonly FoodTruckApiURL = "https://localhost:7032";
  constructor(private http:HttpClient) { }

  getFoodTruckList():Observable<any[]>{
    return this.http.get<any>(this.FoodTruckApiURL + '/api/FoodTruck')
  }

  addFoodTruck(data:any){
    return this.http.post(this.FoodTruckApiURL + '/api/FoodTruck', data)
  }
  updateFoodTruck(id:number|string, data:any)
  {
    return this.http.put(this.FoodTruckApiURL + '/api/${id}', data)
  }

  deleteFoodTruck(id:number|string)
  {
    return this.http.delete(this.FoodTruckApiURL + '/api/${id}')
  }

  //FoodTruckTpes

  getFoodTruckTypeList():Observable<any[]>{
    return this.http.get<any>(this.FoodTruckApiURL + '/api/FoodTruckType')
  }

  addFoodTruckType(data:any){
    return this.http.post(this.FoodTruckApiURL + '/api/FoodTruckType', data)
  }
  updateFoodTruckType(id:number|string, data:any)
  {
    return this.http.put(this.FoodTruckApiURL + '/api/FoodTruckType/${id}', data)
  }

  deleteFoodTruckType(id:number|string)
  {
    return this.http.delete(this.FoodTruckApiURL + '/api/FoodTruckType/${id}')
  }

  // Status Types

  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.FoodTruckApiURL + '/api/Status')
  }

  addStatus(data:any){
    return this.http.post(this.FoodTruckApiURL + '/api/Status', data)
  }
  updateStatus(id:number|string, data:any)
  {
    return this.http.put(this.FoodTruckApiURL + '/api/Status/${id}', data)
  }

  deleteStatus(id:number|string)
  {
    return this.http.delete(this.FoodTruckApiURL + '/api/Status/${id}')
  }
}
