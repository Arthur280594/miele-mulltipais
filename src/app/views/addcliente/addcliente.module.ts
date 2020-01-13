import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddclienteComponent } from './addcliente.component';
import { AddclienteRoutingModule } from './addcliente-routing.module';
 


@NgModule({
  declarations: [AddclienteComponent],
  imports: [
    CommonModule,
    AddclienteRoutingModule
  ]
})
export class AddclienteModule { }
