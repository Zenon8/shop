import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageModel} from '../../core/image.model';
import {Category} from '../../core/category.enum';
import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: Category;
  images: ImageModel[];
  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.name = this.product.name;
    this.price = this.product.price;
    this.description = this.product.description;
    this.images = this.product.images;
  }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  getMainImageUrl(): string {
    return this.images[0].url;
  }

  getMainImageHeight(): number {
    return this.images[0].height;
  }

  isAvailable(): boolean {
    return true;
  }
}
