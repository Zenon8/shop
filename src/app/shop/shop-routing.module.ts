import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPopupComponent } from '../cart/components';
import { ContactUsComponent, HomeComponent } from '../core/components';
import { ProductCardComponent, ProductListComponent } from '../product/components';
import { ShopComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products/:category',
        component: ProductListComponent
      },
      {
        path: 'product/:id',
        component: ProductCardComponent
      },
      {
        path: 'cart',
        component: CartPopupComponent
      },
      {
        path: 'contacts',
        component: ContactUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
