import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ClientesModule { }
