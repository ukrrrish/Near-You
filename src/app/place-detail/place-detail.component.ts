import { Component, OnInit } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {locationTy} from '../place-types/placestypes';
import {PlacedetailsService} from '../placedetails.service'

@Component({
  selector: 'app-place-detail',
templateUrl: './place-detail.component.html',
styleUrls: ['./place-detail.component.css']
})


export class PlaceDetailComponent implements OnInit {



public latitude: number;
public longitude: number;
public searchControl: FormControl;
public zoom: number;
public locationresponse={};
location:locationTy;

@ViewChild("search")
public searchElementRef: ElementRef;

constructor(
  private mapsAPILoader: MapsAPILoader,
  private ngZone: NgZone,
  private placeDetailService: PlacedetailsService
) {}

ngOnInit() {
  //set google maps defaults
  this.placeDetailService.currentLocationDetail.subscribe(location=>this.location=location);
  this.zoom = 9;
  this.latitude = this.location.latitude;
  this.longitude = this.location.longitude;

  //create search FormControl
  this.searchControl = new FormControl();



  //set current position
  //this.setCurrentPosition();

  //load Places Autocomplete
 this.mapsAPILoader.load().then(() => {
    

var service = new google.maps.places.PlacesService(this.searchElementRef.nativeElement);
var pyrmont = new google.maps.LatLng(this.location.latitude,this.location.longitude);
  let request = {
      location : pyrmont,
      radius : 80470 ,
      types: [this.location.placetype]
  };
  return new Promise((resolve,reject)=>{
      service.nearbySearch(request,function(results,status){
          if(status === google.maps.places.PlacesServiceStatus.OK)
          {
            
              resolve(results);
          }else
          {
              reject(status);
          }

      }); 
    }).then(value => {
      this.locationresponse={};
              this.locationresponse = value;
              // more code here
  });
});

}

private setCurrentPosition() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
       this.latitude = position.coords.latitude;
       this.longitude = position.coords.longitude;
     // this.latitude=17.56024650329489;
      //this.longitude=77.6953125;
      this.zoom = 9;
    });
  }
}
}
