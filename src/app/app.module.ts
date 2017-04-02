import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BikeComponent } from './bike/bike.component';
import { BikeService } from './bike.service';
import { BikeInfoComponent } from './bike-info/bike-info.component';


@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    BikeInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
