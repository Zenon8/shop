import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: Map<String, string | number> = new Map();

  constructor() {
    this.set('id', '111');
    this.set('login', 'zenon');
    this.set('email', 'admin@admin.com');
    this.set('image_size_product_card', 300);
  }

  get(key: string): string | number {
    return this.config.get(key);
  }

  set(key: string, value: string | number) {
    this.config.set(key, value);
  }
}
