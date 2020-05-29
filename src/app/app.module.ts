import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from './http-interceptors/index';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { BlogpostModule } from './blogpost/blogpost.module';
import { CmspageModule } from './cmspage/cmspage.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LogModule } from './log/log.module';
import { AdmModule } from './adm/adm.module';
import { DataTablesModule } from 'angular-datatables';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartModule} from 'primeng/chart';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BlogpostModule,
    CmspageModule,
    LogModule,
    AuthModule,
    AdminModule,
    AdmModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    ToastModule,
    ChartModule



  ],
  providers: [httpInterceptorProviders,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
