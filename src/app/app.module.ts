import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AgmCoreModule } from '@agm/core';
import { DisplayPlacesComponent } from './display-places/display-places.component';
import { PlaceTypesComponent } from './place-types/place-types.component';
import { AppRoutingModule } from './app-routing.module';
import {PlacedetailsService} from './placedetails.service';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGTaVN3D3ryClrIBLT-Y4GSL4aZ3TlKPU',
      libraries: ["places"]
      
    }),
    AppRoutingModule
  ],
  providers: [PlacedetailsService],
  declarations: [ AppComponent, DisplayPlacesComponent, PlaceTypesComponent, PlaceDetailComponent, LoadingBarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
