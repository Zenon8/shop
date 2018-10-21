import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPopupComponent } from './cart/components';
import { ContactUsComponent, HomeComponent, PathNotFoundComponent } from './core/components';
import { ProductCardComponent, ProductListComponent } from './product/components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
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
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
