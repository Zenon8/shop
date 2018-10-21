import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminDashboardComponent, ManageProductComponent, ManageOrderComponent]
})
export class AdminModule {
}
