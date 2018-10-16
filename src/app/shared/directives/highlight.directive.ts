import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight')
  color: string;
  originColor: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.originColor = this.el.nativeElement.style.backgroundColor;
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.color);
    return false;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originColor);
    return false;
  }

}
