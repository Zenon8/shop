import { Injectable } from '@angular/core';
import { MenuItemModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Array<MenuItemModel>;

  constructor() {
    this.menu = [
      new MenuItemModel('Home', '/home'),
      new MenuItemModel('Products', '/products/all', [
        new MenuItemModel('Notebook', '/products/notebook'),
        new MenuItemModel('Phone', '/products/phone'),
        new MenuItemModel('Tablet', '/products/tablet')
      ]),
      new MenuItemModel('Contacts', '/contacts')
    ];
  }

  getMenu(): Array<MenuItemModel> {
    return this.menu;
  }
}
