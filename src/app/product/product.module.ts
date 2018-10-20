import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentModule } from '../comment/comment.module';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent, ProductComponent, ProductListComponent } from './components';

@NgModule({
  imports: [
    CommonModule, SharedModule, CommentModule, RouterModule
  ],
  declarations: [ProductComponent, ProductListComponent, ProductCardComponent],
  providers: []
})
export class ProductModule {
}
