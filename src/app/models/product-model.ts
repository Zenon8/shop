import { ImageModel } from "./image-model";
import { Category } from "../components/product/category.enum";

export interface ProductModel {

    name: string;
    price: number;
    description: string;
    category: Category;
    images: ImageModel[];
}
