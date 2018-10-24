import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItemModel } from '../../models';
import { MenuService } from '../../services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Observable<MenuItemModel[]>;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.items = this.menuService.getMenu();
  }
}
