import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: Map<String, Object> = new Map();

  constructor() {
    this.set('id', '111');
    this.set('login', 'zenon');
    this.set('email', 'admin@admin.com');
    this.set('image_size_product_card', 400);
  }

  get(key: string) {
    return this.config.get(key);
  }

  set(key: string, value: string | number) {
    this.config.set(key, value);
  }
}
