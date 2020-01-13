import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerserviciosComponent } from './verservicios.component';
import { VerserviciosRoutingModule } from './servicios-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDatepickerModule, MatIconModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [VerserviciosComponent],
  imports: [
    CommonModule,
    VerserviciosRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatInputModule
  ]
})
export class VerserviciosModule { }
