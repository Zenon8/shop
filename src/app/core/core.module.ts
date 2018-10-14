import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {ConstantsService} from './services/constants.service';

const CONSTANTS = {App: 'TaskManager', Ver: '1.0'};

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactUsComponent],
  providers: [
    {provide: ConstantsService, useValue: CONSTANTS},
  ],
  exports: [ContactUsComponent]
})
export class CoreModule {
}
