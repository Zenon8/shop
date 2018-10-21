import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../../product/models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  product: ProductModel;
  @Input()
  index: number;
  @Output()
  removeEvent = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit() {
  }

  getImageHeight(): number {
    return 60;
  }

  onClickRemove(product: ProductModel) {
    this.removeEvent.next(product);
  }

  getTotal() {
    return this.product.quantity * this.product.price;
  }
}
