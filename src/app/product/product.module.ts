import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent, ProductComponent, ProductListComponent} from './components';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [ProductComponent, ProductListComponent, ProductCardComponent],
  providers: []
})
export class ProductModule {
}
