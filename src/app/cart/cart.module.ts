import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './components/cart/cart.component';
import {CartPopupComponent} from './components/cart-popup/cart-popup.component';
import {CartService} from './services/cart.service';
import {CartListComponent} from './components/cart-list/cart-list.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CartComponent, CartPopupComponent, CartListComponent, CartItemComponent],
  providers: [CartService],
  exports: [CartComponent, CartPopupComponent]
})
export class CartModule {
}
