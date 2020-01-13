import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import 'hammerjs';
import { Chart } from 'chart.js';
import { UiFilterConfigComponent } from '../../common/ui-filter-config/ui-filter-config.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

location;

bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];



  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('location')){
      this.location = localStorage.getItem('location');
      console.log(this.location);
      if(this.location == 'GLOBAL'){
        console.log("se abrira dialog");
      }else{
        console.log("no se abre dialog");
      }
    }



  }

  ngOnDestroy() {
    // remove the the body classes
    console.log("destroy");

  }


}
