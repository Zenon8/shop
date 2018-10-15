import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [ProductComponent, ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductModule {
}