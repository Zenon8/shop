import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeColorDirective, HighlightDirective} from './directives';
import {OrderByPipePipe} from './pipes';

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
