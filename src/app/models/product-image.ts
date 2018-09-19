import { ImageModel } from "./image-model";

export class ProductImage implements ImageModel {
    name: string;
    description: string;
    height: number;
    width: number;
    url: string;

    constructor(url?: string, name?: string, width?: number, height?: number) {
        this.url = url;
        this.name = name;
        this.width = width;
        this.height = height;
    }
}
