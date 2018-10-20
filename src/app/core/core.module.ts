import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactUsComponent, HomeComponent, PathNotFoundComponent } from './components';
import { HorizontalTabMenuComponent } from './components/horizontal-tab-menu/horizontal-tab-menu.component';
import { ConstantsService } from './services';

const CONSTANTS = {App: 'TaskManager', Ver: '1.0'};

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactUsComponent, PathNotFoundComponent, HomeComponent, HorizontalTabMenuComponent],
  providers: [
    {provide: ConstantsService, useValue: CONSTANTS},
  ]
})
export class CoreModule {
}
