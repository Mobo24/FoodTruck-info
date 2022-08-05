import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodTruckComponent } from './food-truck/food-truck.component';
import { ShowFoodTruckComponent } from './FoodTruck/show-food-truck/show-food-truck.component';
import { AddEditFoodTruckComponent } from './FoodTruck/add-edit-food-truck/add-edit-food-truck.component';
import { FoodTruckApiService} from './food-truck-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodTruckComponent,
    ShowFoodTruckComponent,
    AddEditFoodTruckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FoodTruckApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
