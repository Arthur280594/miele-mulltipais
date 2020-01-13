import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verservicios',
  templateUrl: './verservicios.component.html',
  styleUrls: ['./verservicios.component.scss']
})
export class VerserviciosComponent implements OnInit, AfterViewInit{

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  displayedColumns = ['folio', 'ibs', 'cliente', 'estatus', 'fecha'];
  dataSource = new MatTableDataSource();

  public daterange: any = {};
  public txtfechacreacion: any = "";
  public txtfechaservicio: any = "";
  tecnicos: string[] = [];
  preventAbuse = false;
  text_busqueda: string = "";
  FechaServicioinirango: any = "01/01/1900";
  FechaServiciofinrango: any = "01/01/1900";
  FechaCreacioninirango: any = "01/01/1900";
  FechaCreacionfinrango: any = "01/01/1900";
  txttecnico: number = 0;
  id: any;
  public sub: any;
  
  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'DD/MM/YYYY' },
    alwaysShowCalendars: false
  };

  public selectedDate(value: any, datepicker?: any) {
    // this is the date the iser selected
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // or manupulat your own internal property
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;

    this.FechaCreacioninirango = (value.start._d.getMonth() + 1) + '/' + value.start._d.getDate() + '/' + value.start._d.getFullYear()
    this.FechaCreacionfinrango = (value.end._d.getMonth() + 1) + '/' + value.end._d.getDate() + '/' + value.end._d.getFullYear()
  }

  public selectedDateServicio(value: any, datepicker?: any) {
    // this is the date the iser selected
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // or manupulat your own internal property
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;

    this.FechaServicioinirango = (value.start._d.getMonth() + 1) + '/' + value.start._d.getDate() + '/' + value.start._d.getFullYear()
    this.FechaServiciofinrango = (value.end._d.getMonth() + 1) + '/' + value.end._d.getDate() + '/' + value.end._d.getFullYear()
  }
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
  }
  

}

export interface Element {
  ibs: string;
  folio: number;
  cliente: string;
  estatus: string;
  fecha: string;
}