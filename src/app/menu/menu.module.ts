import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MenuComponent, MenuItemComponent, SubMenuItemComponent} from './components';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [MenuComponent],
  declarations: [MenuComponent, MenuItemComponent, SubMenuItemComponent]
})
export class MenuModule {
}
