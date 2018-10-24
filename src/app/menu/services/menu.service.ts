import { Injectable } from '@angular/core';
import { MenuItemModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  shopMenu: MenuItemModel[];
  adminMenu: MenuItemModel[];

  constructor() {
    this.shopMenu = [
      new MenuItemModel('Home', '/home'),
      new MenuItemModel('Products', '/products/all', [
        new MenuItemModel('Notebook', '/products/notebook'),
        new MenuItemModel('Phone', '/products/phone'),
        new MenuItemModel('Tablet', '/products/tablet')
      ]),
      new MenuItemModel('Contacts', '/contacts')
    ];

    this.adminMenu = [
      new MenuItemModel('Dashboard', '/admin'),
      new MenuItemModel('Orders', '/admin/orders'),
      new MenuItemModel('Products', '/admin/products')
    ];
  }

  getMenu(type: 'shop' | 'admin'): MenuItemModel[] {
    if (type === 'admin') {
      return this.adminMenu;
    }
    return this.shopMenu;
  }
}
