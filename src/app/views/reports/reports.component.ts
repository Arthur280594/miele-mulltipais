import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl } from '@angular/material';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  location;

bodyClasses = 'skin-blue sidebar-mini';
public reports = [
  { id: 1, text: 'Tiempos de Respuesta (dias)' },
  { id: 2, text: 'Porcentaje de ordenes de servicio con tiempo de respuesta <= 3 dias [%]' },
  { id: 3, text: 'Porcentaje de ordenes de servicio con tiempo de respuesta > 6 dias [%]' },
  { id: 4, text: 'Tiempos de reparación [dias] - Tiempos de Solución' },
  { id: 5, text: 'First time fix rate [%]' },
  { id: 6, text: 'Satisfacción de cliente (Servicio Tecnico) [puntos]' },
  { id: 7, text: 'Net promoter score (NPS) Servicio Tecnico [puntos]' },
  { id: 8, text: 'Estadisticas' },
  { id: 9, text: 'Aging' },
  { id: 10, text: 'Incumplimientos' },
  { id: 11, text: 'Servicios pendientes' },
  { id: 12, text: 'Satisfacción de cliente (Contact Center) [puntos]' },
  { id: 13, text: 'Net promoter score (NPS) Contact Center [puntos]' },
  { id: 14, text: 'Encuestas realizadas' },
  { id: 15, text: 'Nivel de Servicio Quejas [%]' },
  { id: 16, text: 'Tiempo de reacción promedio Quejas [dias]' },
  { id: 17, text: 'Tiempo de solución Quejas [dias]' },
  { id: 18, text: 'Satisfacción de cliente (Quejas) [puntos]' },
  { id: 19, text: 'Net promoter score (NPS) Quejas [puntos]' },
  { id: 20, text: 'First time fix rate Instalacion [%]' },
  { id: 21, text: 'Satisfacción de cliente (Instalación) [puntos]' },
  { id: 22, text: 'Net promoter score (NPS) Instalacion [puntos]' }
];

reportsFilter: any = {id: "", text:""};

public displayedColumns = ['folio', 'ibs', 'tipo-servicio', 'sub-tipo-servicio', 'estatus-servicio', 'fecha-de-creacion'];
public dataSource = new MatTableDataSource();
public reportType = null;
private dataFields = [
  'folio',
  'ibs',
  'tipo_servicio',
  'subtiposervicio',
  'estatus_servicio',
  'fecha_creacion',
];

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

}
