import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeService } from './bike.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule, MdList, MdListItem } from '@angular/material'
import { DataListModule }  from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    BikeInfoComponent,
    BikesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataListModule,
    MaterialModule.forRoot()
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
