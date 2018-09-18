import { ProductModel } from '../models/product-model';
import { Product } from '../models/product';
import { Category } from '../components/product/category.enum';


export class ProductsService {

  private products: ProductModel[];

  constructor() {
    this.products = [
      new Product('HP 250 G6', '500', '', Category.NOTEBOOK, null),
      new Product('Lenovo IdeaPad 320-15IKB ', '400', '', Category.NOTEBOOK, null),
      new Product('Samsung Galaxy Note 9', '1250', '', Category.PHONE, null),
      new Product('Asus ZenPad 8.0', '250', '', Category.TABLET, null)
    ];
   }
  

  getProducts(): ProductModel[] {
    return this.products;
  }
}
