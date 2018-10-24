import { Component, Input, OnInit } from '@angular/core';
import { MenuItemModel } from '../../models';
import { MenuService } from '../../services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input()
  type: 'shop' | 'admin';
  items: MenuItemModel[];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.items = this.menuService.getMenu(this.type);
  }
}
