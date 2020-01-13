import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl } from '@angular/material';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  preventAbuse = false;
  text_busqueda: any = "";

  displayedColumns = ['nombre', 'email', 'telefono', 'direccion'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
