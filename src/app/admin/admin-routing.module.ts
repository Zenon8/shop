import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent, AdminDashboardComponent, ManageOrderComponent, ManageProductComponent } from './components';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admin/dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'admin/orders',
        component: ManageOrderComponent
      },
      {
        path: 'admin/products',
        component: ManageProductComponent
      },
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
