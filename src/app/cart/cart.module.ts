import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent, CartItemComponent, CartListComponent, CartPopupComponent} from './components';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CartComponent, CartPopupComponent, CartListComponent, CartItemComponent],
  providers: [],
  exports: [CartComponent, CartPopupComponent]
})
export class CartModule {
}
