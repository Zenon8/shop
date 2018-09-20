import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  @Input()
  products: ProductModel[];
  addSubscription: Subscription;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.addSubscription = this.cartService.addEvent.subscribe(products => (this.products = products));
  }

  ngOnDestroy(): void {
    if (this.addSubscription) {
      this.addSubscription.unsubscribe();
    }
  }

  onClick() {
    console.log('asd qweq');
    this.router.navigate(['/cart']);
  }

  getTotalAmount(): number {
    return this.products
      .map(p => p.price)
      .reduce((acc, curr) => acc + curr);
  }

  applyStyle() {
    if (this.products.length > 0) {
      return { 'color': 'darkgreen', 'cursor': 'pointer' };
    } else {
      return { 'color': '#aaa' };
    }
  }
}
