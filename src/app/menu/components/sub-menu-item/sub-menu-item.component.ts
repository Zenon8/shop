import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MenuItemModel} from '../../models';

@Component({
  selector: 'app-sub-menu-item',
  templateUrl: './sub-menu-item.component.html',
  styleUrls: ['./sub-menu-item.component.css']
})
export class SubMenuItemComponent implements OnInit {

  @Input()
  item: MenuItemModel;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick(event: any): void {
    event.stopPropagation();
  }
}
