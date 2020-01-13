import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DialogLocationComponent } from '../../dialogs/dialog-location/dialog-location.component';
import { LocationService } from 'src/app/services/location/location.service';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
location: any;
displayed_direcciones = ['direccion', 'persona'];
dataSource_direcciones = new MatTableDataSource();

displayed_ordenes = ['folio', 'persona'];
dataSource_ordenes = new MatTableDataSource();

displayed_telefonos = ['telefono', 'persona'];
dataSource_telefonos = new MatTableDataSource();

displayed_personas = ['persona', 'direccion'];
dataSource_personas = new MatTableDataSource();


preventAbuse = false;

text_busqueda: string = "";
public result_personas: string[];
public result_direcciones: string[];
public result_ordenes: string[];
public result_telefonos: string[];
isvisible_orden: boolean = false;
isvisible_telefono: boolean = false;
isvisible_direccion: boolean = false;
isvisible_persona: boolean = false;
valid: boolean = false;

bodyClasses = 'skin-blue sidebar-mini';
body: HTMLBodyElement = document.getElementsByTagName('body')[0];


  constructor( public dialog: MatDialog, public pais: LocationService, private router: Router ) { }


  ngOnInit() {   
    if(this.pais.location == "GLOBAL"){
    this.openDialog();
  }else{
    console.log(this.pais.location);
  }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLocationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(this.pais.location == "GLOBAL"){
        this.router.navigate(["/"]).then( (e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }else{
        //ejecutar proceso de traida de datos 
        //duda se puede traer la informacion de manera global y aplicar un 
        //pipe que cambien la informacion en vista por global, mexico o chile
        //creo yo seria mejor practica
      }      
    });
  }

}
