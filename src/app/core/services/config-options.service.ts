import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: Map<String, Object> = new Map();

  constructor() {
    this.config.set('id', '111');
    this.config.set('login', 'zenon');
    this.config.set('email', 'admin@admin.com');
  }

  get(key: string) {
    return this.config.get(key);
  }

  set(key: string, value: object) {
    this.config.set(key, value);
  }
}
