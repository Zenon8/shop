import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartModule } from '../cart/cart.module';
import { CommentModule } from '../comment/comment.module';
import { CoreModule } from '../core/core.module';
import { MenuModule } from '../menu/menu.module';
import { OrderModule } from '../order/order.module';
import { ProductModule } from '../product/product.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './components';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    CartModule,
    CoreModule,
    OrderModule,
    ProductModule,
    SharedModule,
    CommentModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule {
}
