import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../services';
import {MenuItemModel} from '../../models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: Array<MenuItemModel>;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.items = this.menuService.getMenu();
  }

}
