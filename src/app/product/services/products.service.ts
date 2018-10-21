import { Injectable } from '@angular/core';
import { ConfigOptionsService, RestService } from '../../core/services';
import { ProductModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: ProductModel[];

  constructor(private config: ConfigOptionsService, private restService: RestService) {}

  getProducts(): ProductModel[] {
    return this.products;
  }

  getImageSize(el: object): string | number {
    let key = '';
    if (el.constructor.name === 'ProductCardComponent') {
      key = 'image_size_product_card';
    }
    return this.config.get(key);
  }

  initializeProductList(): Promise<any> {
    return new Promise((resolve) => {
      this.restService.getProducts().subscribe(arr => {
          console.log('Initializer', arr);
          this.products = arr;
          resolve();
        }
      );
    }).catch(this.handleError());
  }

  private handleError() {
    return (error: any) => console.log(error);
  }


  subtract(product: ProductModel) {
    return this.products.find(item => product.name === item.name).quantity--;
  }

  returnToList(product: ProductModel) {
    this.products.find(item => product.name === item.name).quantity++;
  }

  getProductById(id: number): ProductModel {
    return this.products.find(pr => pr.id === id);
  }
}


// const height = 130;
