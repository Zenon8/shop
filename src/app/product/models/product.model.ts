import { Category } from './category.enum';
import { ImageModel } from './image.model';

export class ProductModel {

  constructor(
    public id: number,
    public name: string,
    public price: number,
    public images: ImageModel[],
    public quantity: number = 0,
    public category?: Category,
    public description?: string
  ) {
  }
}
