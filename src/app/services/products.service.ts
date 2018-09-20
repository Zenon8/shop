import { ProductModel } from '../models/product.model';
import { Category } from '../components/product/category.enum';
import { ImageModel } from '../models/image.model';


export class ProductsService {

  private products: ProductModel[];

  constructor() {
    const hpImg = 'https://i2.rozetka.ua/goods/4047041/copy_hp_250_g6_1xn74ea_5ace39c164ca6_images_4047041832.jpg';
    const lenovoImg = 'https://i2.rozetka.ua/goods/2093004/copy_lenovo_80xl02rdra_596de165a5083_images_2093004886.jpg';
    const samsungImg = 'https://i2.rozetka.ua/goods/6520779/samsung_sm_n960fzkdsek_images_6520779374.jpg';
    const asusImg = 'https://i1.rozetka.ua/goods/4386368/asus_z380knL_6a080a_images_4386368568.jpg';

    const width = 130;
    const height = 130;

    this.products = [
      new ProductModel('HP 250 G6', 500, '', Category.NOTEBOOK, [new ImageModel(hpImg, width, height)]),
      new ProductModel('Lenovo IdeaPad 320-15IKB ', 400, '', Category.NOTEBOOK, [new ImageModel(lenovoImg, width, height)]),
      new ProductModel('Samsung Galaxy Note 9', 1250, '', Category.PHONE, [new ImageModel(samsungImg, width, height)]),
      new ProductModel('Asus ZenPad 8.0', 250, '', Category.TABLET, [new ImageModel(asusImg, width, height)])
    ];
  }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
