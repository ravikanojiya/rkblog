import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { PageComponent } from './page/page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PageComponent, ContactFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CmspageRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class CmspageModule { }
