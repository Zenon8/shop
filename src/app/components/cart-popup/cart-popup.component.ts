import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Subscription} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('hidden', style({visibility: 'hidden', opacity: 0})),
      state('shown', style({visibility: 'visible', opacity: 1})),
      transition('shown <=> hidden', animate('100ms ease-in'))
    ])]
})

export class CartPopupComponent implements OnInit, OnDestroy {

  products: ProductModel[];
  state: 'shown' | 'hidden' = 'hidden';
  private addSubscription: Subscription;
  private visibilitySubscription: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.addSubscription = this.cartService.addProductEvent.subscribe(products => (this.products = products));
    this.visibilitySubscription = this.cartService.visibilityCartPopupEvent.subscribe(s => this.state = s);
  }

  ngOnDestroy(): void {
    if (this.addSubscription) {
      this.addSubscription.unsubscribe();
    }
    if (this.visibilitySubscription) {
      this.visibilitySubscription.unsubscribe();
    }
  }

  getImageHeight(product: ProductModel): number {
    return product.images[0].height - 70;
  }

  onCheckout(event: Event) {
    event.stopPropagation();
  }

  onClosePopup(event: Event) {
    this.cartService.closeCartPopup();
    event.stopPropagation();
  }

  removeProduct(product: ProductModel) {
    this.cartService.removeFromCart(product);
  }
}
