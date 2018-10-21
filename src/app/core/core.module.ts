import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ContactUsComponent, HomeComponent, HorizontalTabMenuComponent, PathNotFoundComponent } from './components';
import { ConstantsService } from './services';

const CONSTANTS = {App: 'TaskManager', Ver: '1.0'};

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [ContactUsComponent, PathNotFoundComponent, HomeComponent, HorizontalTabMenuComponent],
  providers: [
    {provide: ConstantsService, useValue: CONSTANTS},
  ]
})
export class CoreModule {
}
