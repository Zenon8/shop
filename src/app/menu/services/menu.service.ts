import { Injectable } from '@angular/core';
import { MenuItemModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  mainMenu: MenuItemModel[];
  adminMenu: MenuItemModel[];

  constructor() {
    this.mainMenu = [
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

  getMenu(menuType: string): Array<MenuItemModel> {
    if (menuType === 'main') {
      return this.mainMenu;
    }
    if (menuType === 'admin') {
      return this.adminMenu;
    }
  }
}
