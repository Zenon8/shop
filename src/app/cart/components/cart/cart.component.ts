import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  totalAmount: number;
  totalQuantity: number;
  addSubscription: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.addSubscription = this.cartService.cartEvent.subscribe(() => {
      this.totalAmount = this.cartService.getTotalAmount();
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
  }

  ngOnDestroy(): void {
    this.addSubscription.unsubscribe();
  }

  onClick() {
    this.cartService.openCartPopup();
  }

  applyStyle() {
    return {
      'color': this.totalQuantity > 0 ? 'darkgreen' : '#aaa',
      'cursor': this.totalQuantity > 0 ? 'pointer' : 'unset'
    };
  }
}
