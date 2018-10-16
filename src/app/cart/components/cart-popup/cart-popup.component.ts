import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { ProductModel } from '../../../product/models/product.model';
import { animate, state, style, transition, trigger, query } from '@angular/animations';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state(':enter', style({ visibility: 'hidden', opacity: 0 })),
      state(':leave', style({ visibility: 'visible', opacity: 1 })),
      transition('* <=> *', animate('100ms ease-in'))
    ]),
    trigger('routerTransition', [
      transition('* => *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(':leave', [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))], {
          optional: true
        }),
        query(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))], {
          optional: true
        })
      ])
    ])
  ]
})
export class CartPopupComponent implements OnInit, OnDestroy {
  products: ProductModel[];
  state: 'shown' | 'hidden' = 'hidden';
  private addSubscription: Subscription;
  private visibilitySubscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.addSubscription = this.cartService.cartEvent.subscribe(arr => (this.products = [...arr]));
    this.visibilitySubscription = this.cartService.visibilityCartPopupEvent.subscribe(
      s => (this.state = s)
    );
  }

  ngOnDestroy(): void {
    this.addSubscription.unsubscribe();
    this.visibilitySubscription.unsubscribe();
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
