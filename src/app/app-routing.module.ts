import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductListComponent } from './pages/admin/admin-product-list/admin-product-list.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './pages/admin/admin-product-edit/admin-product-edit.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path: "", component: BaseLayoutComponent},
  {path: "admin", component: AdminLayoutComponent, children:[
    {path: "", redirectTo:"dashboard", pathMatch:"full"},
    {path: "dashboard", component: DashboardComponent},
    {path: "products", component: AdminProductListComponent},
    {path: "product/add", component: AdminProductAddComponent},
    {path: "product/:id/edit", component: AdminProductEditComponent},
  ]},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
