import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../services/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  products: ProductModel[];
  addSubscription: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.addSubscription = this.cartService.addProductEvent.subscribe(products => (this.products = products));
  }

  ngOnDestroy(): void {
    if (this.addSubscription) {
      this.addSubscription.unsubscribe();
    }
  }

  onClick() {
    this.cartService.openCartPopup();
  }

  getTotalAmount(): number {
    return this.products
      .map(p => p.price)
      .reduce((acc, curr) => acc + curr);
  }

  applyStyle() {
    return {
      'color': this.products.length > 0 ? 'darkgreen' : '#aaa',
      'cursor': this.products.length > 0 ? 'pointer' : 'unset'
    };
  }
}
