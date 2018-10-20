import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentItemComponent, CommentListComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CommentListComponent],
  declarations: [CommentListComponent, CommentItemComponent]
})
export class CommentModule {
}
