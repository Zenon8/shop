import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductsService} from './services/products.service';
import {CartComponent} from './components/cart/cart.component';
import {CartService} from './services/cart.service';
import {CartPopupComponent} from './components/cart-popup/cart-popup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  // {path: 'cart', component: CartPopupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    CartPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
