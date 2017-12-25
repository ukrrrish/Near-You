import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import {locationTy} from './place-types/placestypes';



@Injectable()
export class PlacedetailsService {


  constructor(private http: Http) { }
  private locationSource =new BehaviorSubject<locationTy>({latitude:14.40,longitude:14.40,placetype:"bank"});
  currentLocationDetail=this.locationSource.asObservable();
  changeLocationDetail(location:locationTy){
   this.locationSource.next(location);
  }
 

  getPlaceDetails(){
  return this.http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyAGTaVN3D3ryClrIBLT-Y4GSL4aZ3TlKPU`)
    .map((res:Response) => res.json());
}



}
