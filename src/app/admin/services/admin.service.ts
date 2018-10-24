import { Injectable } from '@angular/core';
import { MenuService } from './../../menu/services/menu.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private menuService: MenuService) {}

  initAdminMenu(): void {
    this.menuService.activateMenu('admin');
  }

  initShopMenu(): void {
    this.menuService.activateMenu('shop');
  }
}
