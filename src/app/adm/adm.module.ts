import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';
import { AdminCompComponent } from './admin-comp/admin-comp.component';


@NgModule({
  declarations: [AdminCompComponent],
  imports: [
    CommonModule,
    AdmRoutingModule,
  ]
})
export class AdmModule { }
