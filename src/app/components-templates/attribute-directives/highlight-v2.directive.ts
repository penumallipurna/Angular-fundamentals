import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlightV2]'
})
export class HighlightV2Directive {

  constructor(private el: ElementRef) { }

  @Input() highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
