import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { CommentModule } from './comment/comment.module';
import { CoreModule } from './core/core.module';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    CartModule,
    CoreModule,
    OrderModule,
    ProductModule,
    SharedModule,
    AppRoutingModule,
    MenuModule,
    CommentModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(router: Router) {
    // console.log(`Routes: ${JSON.stringify(router.config, undefined, 2)}`);
  }
}
