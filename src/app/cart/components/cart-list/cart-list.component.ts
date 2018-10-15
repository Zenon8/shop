import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../../../product/models/product.model';
import {CartService} from '../../services/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  @Input()
  products: ProductModel[];
  totalAmount: number;
  totalQuantity: number;
  cartSubscription: Subscription;
  sort = {field: 'name', direct: true};

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartSubscription = this.cartService.cartEvent.subscribe(() => {
      this.totalAmount = this.cartService.getTotalAmount();
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  onRemoveItem(product: ProductModel) {
    this.cartService.removeFromCart(product);
  }

  onClickHeader(event: any) {
    this.sort = {field: event.target.textContent.toLowerCase(), direct: !this.sort.direct};
    event.stopPropagation();
  }
}
