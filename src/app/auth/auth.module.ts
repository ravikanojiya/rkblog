import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LogModule } from '../log/log.module';


@NgModule({
  imports: [
    CommonModule,
    LogModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: []
})
export class AuthModule { }