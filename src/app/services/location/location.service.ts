import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  location: any;
  constructor() {
    this.location = "GLOBAL";
   }
}
