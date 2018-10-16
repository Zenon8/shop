import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Router} from '@angular/router';

import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartModule} from './cart/cart.module';
import {CoreModule} from './core/core.module';
import {OrderModule} from './order/order.module';
import {ProductModule} from './product/product.module';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {MenuModule} from './menu/menu.module';


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
    MenuModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(router: Router) {
    console.log(`Routes: ${JSON.stringify(router.config, undefined, 2)}`);
  }
}
