import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.scss']
})
export class StarterHeaderComponent implements OnInit {

  location:string;
  constructor(public pais: LocationService) { }

  ngOnInit() {
    
      this.location = this.pais.location;
  }

  verlocacion(value){
    this.pais.location = value;
    this.location = value;
  }

 

}
