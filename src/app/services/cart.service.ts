import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Subject, BehaviorSubject } from 'rxjs';

export class CartService {

  products: Array<ProductModel> = new Array();
  addEvent: Subject<ProductModel[]> = new BehaviorSubject(this.products);
  
  constructor() { }

  addToCard(product: ProductModel) {
    this.products.push(product);
    this.addEvent.next(this.products);
  }
}
