import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './directives/highlight.directive';
import {ChangeColorDirective} from './directives/change-color.directive';
import {OrderByPipePipe} from './pipes/order-by-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective, ChangeColorDirective, OrderByPipePipe
  ],
  declarations: [HighlightDirective, ChangeColorDirective, OrderByPipePipe]
})
export class SharedModule {
}
