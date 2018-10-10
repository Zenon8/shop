import {Component, Inject, OnInit, Optional} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {ConfigOptionsService} from '../../services/config-options.service';
import {ConstantsService} from '../../services/constants.service';
import {GENERATOR_9, GeneratorService, generatorServiceFactory} from '../../services/generator.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [
    {provide: GENERATOR_9, useFactory: generatorServiceFactory(9)}
  ]
})
export class ContactUsComponent implements OnInit {

  constructor(@Optional() localStorageService: LocalStorageService,
              @Optional() configService: ConfigOptionsService,
              @Optional() constantsService: ConstantsService,
              @Inject(GENERATOR_9) @Optional() generatorService: GeneratorService) {
  }

  ngOnInit() {
  }

}
