import { Component, OnInit ,Input ,Output ,EventEmitter} from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {PlacedetailsService} from '../placedetails.service'
import {locationTy} from '../place-types/placestypes';

@Component({
  selector: 'app-display-places',
  templateUrl: './display-places.component.html',
  styleUrls: ['./display-places.component.css']
})
export class DisplayPlacesComponent implements OnInit {

 public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public location:any;
   locationty:locationTy;
  @Output() messageEvent=new EventEmitter<Boolean>();


  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private placeDetailService: PlacedetailsService
  ) {}

  ngOnInit() {
     this.placeDetailService.currentLocationDetail.subscribe(location=>this.locationty=location);
    this.messageEvent.emit(true);
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          this.messageEvent.emit(true);
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom 
          this.location=place.geometry.location;
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.placeDetailService.changeLocationDetail({latitude:place.geometry.location.lat(),longitude:place.geometry.location.lng(),placetype:this.location.placetype});
          this.messageEvent.emit(false);
          
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        this.messageEvent.emit(false);
      this.placeDetailService.changeLocationDetail({latitude:this.latitude,longitude:this.longitude,placetype:this.locationty.placetype});
      });
    }

   // this.setPlaces();
  }

/*private setPlaces()
{

  this.mapsAPILoader.load().then(() => {
     
  
  var service = new google.maps.places.PlacesService(this.searchElementRef.nativeElement);
  var pyrmont = new google.maps.LatLng(17.56024650329489,77.6953125);
    let request = {
        location : pyrmont,
        radius : 8047 ,
        types: ["restaurant"]
    };
    return new Promise((resolve,reject)=>{
        service.nearbySearch(request,function(results,status){
            if(status === google.maps.places.PlacesServiceStatus.OK)
            {
                resolve(results);    
               for (let  i = 0; i < results.length; i++) {
                    var place = results[i];
					
					        console.log("In distance "+place.geometry.location);
                    // If the request succeeds, draw the place location on
                    // the map as a marker, and register an event to handle a
                    // click on the marker.
                    
                }

                
            }else
            {
                reject(status);
            }

        }); 
 });
  });


}*/
}
