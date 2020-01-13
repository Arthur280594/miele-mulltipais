import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-dialog-location',
  templateUrl: './dialog-location.component.html',
  styleUrls: ['./dialog-location.component.scss']
})
export class DialogLocationComponent implements OnInit {

  constructor(public pais: LocationService) { }
location:any;
  ngOnInit() {
  }

  cambiolocation(value){
    this.pais.location = value;
  }

}
