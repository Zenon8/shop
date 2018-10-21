import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  getMainImageUrl(): string {
    return this.product.images[0].url;
  }

  getMainImageHeight(): number {
    return 130;
  }

  isDisabled(): boolean {
    return this.product.quantity < 1;
  }
}
