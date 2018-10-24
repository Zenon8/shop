import { APP_INITIALIZER, Inject, NgModule, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsService } from './product/services';
import { ShopModule } from './shop/shop.module';

export function appInit(productService: ProductsService) {
  return () => productService.initializeProductList();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ShopModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: appInit, deps: [ProductsService], multi: true}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(router: Router, @Inject(APP_INITIALIZER) @Optional() appInits: (() => any)[]) {
    // appInits.forEach(el => console.log(el));
    console.log(`Routes: ${JSON.stringify(router.config, undefined, 2)}`);
  }
}
