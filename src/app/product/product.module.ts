import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './components/product.component';
import {ProductListComponent} from './components/product-list.component';
import {ProductsService} from './services/products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, ProductListComponent],
  providers: [ProductsService],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductModule {
}
