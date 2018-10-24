import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { MenuItemModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  shopMenu: MenuItemModel[];
  adminMenu: MenuItemModel[];
  private activeMenu: MenuItemModel[];
  private activeMenu$ = new BehaviorSubject<MenuItemModel[]>(1);

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

    this.activeMenu$.next([...this.shopMenu]);
  }

  getMenu(): Observable<MenuItemModel[]> {
    console.log('Active menu', this.activeMenu);
    return this.activeMenu$;
  }

  activateMenu(menuType: 'admin' | 'shop'): void {
    if (menuType === 'admin') {
      this.activeMenu$.next([...this.adminMenu]);
    } else {
      this.activeMenu$.next([...this.shopMenu]);
    }
  }
}
