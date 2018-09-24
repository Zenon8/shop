import {ProductModel} from '../models/product.model';
import {BehaviorSubject, Subject} from 'rxjs';

export class CartService {

  products: Array<ProductModel> = [];
  addProductEvent: Subject<ProductModel[]> = new BehaviorSubject(this.products);
  state: 'shown' | 'hidden' = 'hidden';
  visibilityCartPopupEvent: Subject<'shown' | 'hidden'> = new BehaviorSubject(this.state);

  constructor() {
  }

  addToCard(product: ProductModel) {
    this.products.push(product);
    this.addProductEvent.next(this.products);
  }

  openCartPopup() {
    this.visibilityCartPopupEvent.next('shown');
  }

  closeCartPopup() {
    this.visibilityCartPopupEvent.next('hidden');
  }

  removeFromCart(product: ProductModel) {
    const index = this.products.indexOf(product, 0);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
