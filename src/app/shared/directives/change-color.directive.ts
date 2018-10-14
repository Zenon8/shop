import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  @Input('appChangeColor')
  color: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    return false;
  }
}
