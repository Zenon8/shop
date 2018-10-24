import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  ConfigOptionsService,
  ConstantsService,
  GENERATOR_9,
  GeneratorService,
  generatorServiceFactory,
  LocalStorageService
} from '../../services';

export const numberForGenerator = () => 9;

@Component({
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [
    {provide: GENERATOR_9, useFactory: generatorServiceFactory(9)}
  ]
})
export class ContactUsComponent implements OnInit {
  randomLine: string;

  constructor(@Optional() private localStorageService: LocalStorageService,
              @Optional() private configService: ConfigOptionsService,
              @Optional() private constantsService: ConstantsService,
              @Inject(GENERATOR_9) @Optional() private generatorService: GeneratorService) {
  }

  ngOnInit() {
    this.generateLine();
  }

  onGenerate() {
    this.generateLine();
  }

  private generateLine() {
    this.randomLine = this.generatorService.generate();
  }
}
