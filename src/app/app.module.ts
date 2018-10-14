import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartModule} from './cart/cart.module';
import {CoreModule} from './core/core.module';
import {OrderModule} from './order/order.module';
import {ProductModule} from './product/product.module';
import {SharedModule} from './shared/shared.module';

const appRoutes: Routes = [
  // {path: 'cart', component: CartPopupComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    CartModule,
    CoreModule,
    OrderModule,
    ProductModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
