import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogfromComponent } from './blogfrom/blogfrom.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { DataTablesModule } from 'angular-datatables';
import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';



@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, ManageBlogsComponent, ManageCategoriesComponent, ManagePagesComponent, BlogfromComponent, CategorylistComponent],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    AdminRoutingModule,DataTablesModule,
    ToastModule

  ], providers: [MessageService],

})
export class AdminModule { }
