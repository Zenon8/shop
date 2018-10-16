import {Component, Input, OnInit} from '@angular/core';
import {MenuItemModel} from '../../models';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  item: MenuItemModel;

  constructor() {
  }

  ngOnInit() {
  }
}
