import { Component, OnInit } from '@angular/core';
import {PLACETYPES,placetype,locationTy} from './placestypes';
import {PlacedetailsService} from '../placedetails.service'


@Component({
  selector: 'app-place-types',
  templateUrl: './place-types.component.html',
  styleUrls: ['./place-types.component.css']
})


export class PlaceTypesComponent implements OnInit {
  location:locationTy;
    public placetypesdisplay:placetype[];
     profile = {};
  

  constructor(private placeDetailService: PlacedetailsService) { }

  ngOnInit() {
    this.placeDetailService.currentLocationDetail.subscribe(location=>this.location=location);
    this.placetypesdisplay = PLACETYPES;

  }

  loadUser():void {
    this.placeDetailService.getPlaceDetails().subscribe(data => this.profile = data);
  }
   
   setItemType(ind){
  this.placeDetailService.changeLocationDetail({latitude:this.location.latitude,longitude:this.location.longitude,placetype:this.placetypesdisplay[ind].placekey});
   }
}
