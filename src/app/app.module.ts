import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeService } from './bike.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing/app-routing.module';
import {DataTableModule, ButtonModule} from 'primeng/primeng';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    BikesComponent,
    BikeInfoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BikeService],
})
export class AppModule { }
