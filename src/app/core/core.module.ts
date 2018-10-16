import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent, HomeComponent, PathNotFoundComponent} from './components';
import {ConstantsService} from './services';

const CONSTANTS = {App: 'TaskManager', Ver: '1.0'};

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactUsComponent, PathNotFoundComponent, HomeComponent],
  providers: [
    {provide: ConstantsService, useValue: CONSTANTS},
  ]
})
export class CoreModule {
}
