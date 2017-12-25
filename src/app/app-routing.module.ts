import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPlacesComponent } from './display-places/display-places.component';
import { PlaceTypesComponent } from './place-types/place-types.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/placetypes', pathMatch: 'full' },
  { path: 'placetypes', component: PlaceTypesComponent },  
  { path: 'placedetails', component: PlaceDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}