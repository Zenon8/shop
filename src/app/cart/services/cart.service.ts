import {ProductModel} from '../../product/models/product.model';
import {BehaviorSubject, Subject} from 'rxjs';

export class CartService {

  cart: Array<ProductModel> = [];
  cartEvent: Subject<ProductModel[]> = new BehaviorSubject(this.cart);
  removeEvent: Subject<ProductModel> = new Subject();
  state: 'shown' | 'hidden' = 'hidden';
  visibilityCartPopupEvent: Subject<'shown' | 'hidden'> = new BehaviorSubject(this.state);

  constructor() {
  }

  openCartPopup() {
    if (this.cart.length > 0) {
      this.visibilityCartPopupEvent.next('shown');
    }
  }

  closeCartPopup() {
    this.visibilityCartPopupEvent.next('hidden');
  }

  addToCard(product: ProductModel) {
    const productInCart = this.cart.find(item => product.name === item.name);
    if (productInCart === undefined) {
      const orderedProduct = {...product, ...{quantity: 1}};
      this.cart.push(orderedProduct);
    } else {
      productInCart.quantity++;
    }
    this.cartEvent.next(this.cart);
  }

  removeFromCart(product: ProductModel) {
    const removedItem = this.cart.find(item => product.name === item.name);
    if (removedItem.quantity > 1) {
      removedItem.quantity--;
    } else {
      const index = this.cart.indexOf(product, 0);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    }
    this.removeEvent.next(product);
    this.cartEvent.next(this.cart);
  }

  getTotalAmount(): number {
    return this.cart
      .map(p => p.price * p.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  }

  getTotalQuantity(): number {
    return this.cart
      .map(p => p.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  }
}
