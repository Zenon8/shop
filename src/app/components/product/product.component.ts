import { Component, OnInit, Input } from '@angular/core';
import { ImageModel } from '../../models/image-model';
import { Category } from './category.enum';
import { ProductModel } from '../../models/product-model';

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
  isAvailable: boolean;
  images: ImageModel[];
  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() {
    this.name = this.product.name;
    this.price = this.product.price;
    this.description = this.product.description;
    this.images = this.product.images;
  }

  addToCart() {
    console.log(`${this.name} has been added to cart`);
  }

  getMainImageUrl(): string {
    return this.images[0].url;
  }

  getMainImageHeight(): number {
    return this.images[0].height;
  }

}
