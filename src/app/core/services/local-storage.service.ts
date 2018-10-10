import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setItem(key: string, value: string) {
    console.log('setItem');
    localStorage.setItem(key, value);
  }

  getItem(key: string): any {
    console.log('getItem');
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    console.log('removeItem');
    localStorage.removeItem(key);
  }
}
