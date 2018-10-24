import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from '../menu/menu.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent, AdminDashboardComponent, ManageOrderComponent, ManageProductComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MenuModule
  ],
  declarations: [AdminDashboardComponent, ManageProductComponent, ManageOrderComponent, AdminComponent]
})
export class AdminModule {
}
