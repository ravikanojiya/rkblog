import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { AuthGuard } from '../auth/auth.guard';
import { BlogfromComponent } from './blogfrom/blogfrom.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CategoriesComponent } from '../blogpost/categories/categories.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'blogs', component: ManageBlogsComponent },
          { path: 'blogs/create', component: BlogfromComponent },
          { path: 'blogs/edit/:id', component: BlogfromComponent },
          { path: 'categories', component: CategorylistComponent },
          { path: 'categories/create', component: ManageCategoriesComponent },
          { path: 'pages', component: ManagePagesComponent },
          { path: '', component: AdminDashboardComponent }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
