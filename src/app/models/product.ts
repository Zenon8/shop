import { ProductModel } from './product-model';
import { ImageModel } from './image-model';
import { Category } from '../components/product/category.enum';

export class Product implements ProductModel {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public category: Category,
    public images: ImageModel[]
  ) {}
}
