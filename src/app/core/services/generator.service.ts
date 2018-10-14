import {Injectable, InjectionToken} from '@angular/core';

export const generatorServiceFactory = (n: number) => () => new GeneratorService(n);

export const GENERATOR_9 = new InjectionToken<GeneratorService>('Generator_9');

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

  constructor(private n: number) {
  }

  generate(): string {
    let result = '';
    for (let i = 0; i < this.n; i++) {
      result += this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    return result;
  }
}
