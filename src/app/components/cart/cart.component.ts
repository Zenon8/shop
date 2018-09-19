import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  addSubscription: Subscription;
  @Input()
  products: ProductModel[];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.addSubscription = this.cartService.addEvent.subscribe(products => (this.products = products));
  }

  ngOnDestroy(): void {
    if (this.addSubscription) {
      this.addSubscription.unsubscribe();
    }
  }
}
