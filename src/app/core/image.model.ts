export class ImageModel {
    name: string;
    height: number;
    width: number;
    url: string;

    constructor(url?: string, width?: number, height?: number, name?: string) {
        this.url = url;
        this.width = width;
        this.height = height;
        this.name = name;
    }
} 