import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './components/cart.component';
import {CartPopupComponent} from './components/cart-popup.component';
import {CartService} from './services/cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, CartPopupComponent],
  providers: [CartService],
  exports: [CartComponent, CartPopupComponent]
})
export class CartModule {
}
