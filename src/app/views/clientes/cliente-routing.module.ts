import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';



const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    data: {
      title: 'Cliente'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ClienteRoutingModule { }
