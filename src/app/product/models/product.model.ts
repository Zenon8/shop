import {ImageModel} from '../../core/image.model';
import {Category} from '../../core/category.enum';

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
