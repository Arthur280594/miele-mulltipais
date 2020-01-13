import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatosService } from '../../services/datos/datos.service';

@Component({
  selector: 'ui-filter-config',
  templateUrl: './ui-filter-config.component.html',
  styleUrls: ['./ui-filter-config.component.css']
})
export class UiFilterConfigComponent implements OnInit {
  public FILTER_WARRANTY = "FILTER_WARRANTY";
  public FILTER_PERIOD = "FILTER_PERIOD";
  public FILTER_SERVICE = "FILTER_SERVICE";
  public FILTER_SUB_SERVICE = "FILTER_SUB_SERVICE";
  public FILTER_TECHNIC = "FILTER_TECHNIC";
  public FILTER_SUB_TECHNIC = "FILTER_SUB_TECHNIC";
  public FILTER_TECNICO = "FILTER_TECNICO";

  @Input() buttonText = "Filtrar";
  @Output() onFilter: EventEmitter<any> = new EventEmitter();

  ngOnInit() { }

  // Data
  public graphConfigData: any = {
    Garantia: null,
    fechain: null,
    fechafin: null,
    TipoServicio: null,
    SubTipoServicio: null,
    TipoTecnico: null,
    SubTipoTecnico: null,
    TecnicoId: null,
  };
  public maxDateFirst = null;
  public minDateEnd = null;

  // Filters
  public warrantyValues: Object[] = [];
  public periodValues: Object[] = [];
  public technicValues: Object[] = [];
  public subTechnicValues: Object[] = [];
  public serviceValues: Object[] = [];
  public subServiceValues: Object[] = [];
  public data_tecnicos: Object[] = [];

  constructor(private heroService: DatosService) { }

  public init(): void {
    this.initFilterValues();
  }

  private initFilterValues(): void {
    this.heroService.dashboard_warranty_values()
      .subscribe((res: Object[]) => {
        this.warrantyValues = res;
      });

    this.heroService.dashboard_period_values()
      .subscribe((res: Object[]) => {
        this.periodValues = res;
      });

    this.heroService.dashboard_type_service_values()
      .subscribe((res: Object[]) => {
        this.serviceValues = res;
      });

    this.heroService.dashboard_type_technic_values()
      .subscribe((res: Object[]) => {
        this.technicValues = res;
      });

    this.heroService.data_tecnicos()
      .subscribe((res: Object[]) => {
        this.data_tecnicos = res;
      });
  }

  public onServiceTypeChanged(id): void {
    // clean up
    this.subServiceValues = [];

    this.heroService.dashboard_sub_type_service_values(id)
      .subscribe((res: Object[]) => {
        this.subServiceValues = res;
      });

    this.onFilterConfigChanged(this.FILTER_SERVICE, id);
  }

  public onTechnicTypeChanged(id): void {
    // clean up
    this.subTechnicValues = [];

    this.heroService.dashboard_sub_type_technic_values(id)
      .subscribe((res: Object[]) => {
        this.subTechnicValues = res;
      });

    this.onFilterConfigChanged(this.FILTER_TECHNIC, id);
  }

  public onFilterConfigChanged(filter, value): void {
    if (filter == this.FILTER_WARRANTY) {
      this.graphConfigData.Garantia = value;
    } else if (filter == this.FILTER_SERVICE) {
      this.graphConfigData.TipoServicio = value;
    } else if (filter == this.FILTER_SUB_SERVICE) {
      this.graphConfigData.SubTipoServicio = value;
    } else if (filter == this.FILTER_TECHNIC) {
      this.graphConfigData.TipoTecnico = value;
    } else if (filter == this.FILTER_SUB_TECHNIC) {
      this.graphConfigData.SubTipoTecnico = value;
    } else if (filter == this.FILTER_TECNICO) {
      this.graphConfigData.TecnicoId = value;
    }
  }

  public onFilterClicked(): void {
    this.onFilter.emit([this.graphConfigData]);
  }

  public getConfig(): any {
    return this.graphConfigData;
  }

  public changeDate(type: string, event: MatDatepickerInputEvent<Date>): void {
    let date = event.value;
    let dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    if (type == 'DATE_INIT') {
      this.minDateEnd = date;
      this.graphConfigData.fechain = dateString;
    } else if (type == 'DATE_END') {
      this.maxDateFirst = date;
      this.graphConfigData.fechafin = dateString;
    }
  }

}
