import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddclienteComponent } from './addcliente.component';


const routes: Routes = [
  {
    path: '',
    component: AddclienteComponent,
    data: {
      title: 'add-Cliente'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AddclienteRoutingModule { }
