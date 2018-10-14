import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './directives/highlight.directive';
import {ChangeColorDirective} from './directives/change-color.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective, ChangeColorDirective
  ],
  declarations: [HighlightDirective, ChangeColorDirective]
})
export class SharedModule {
}
