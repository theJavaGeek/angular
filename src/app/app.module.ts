import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeService } from './bike.service';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule, MdList, MdListItem } from '@angular/material'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BikesComponent
  ],
  bootstrap: [AppComponent],
  providers: [BikeService],
})
export class AppModule { }
