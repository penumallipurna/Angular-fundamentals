import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightV1]'
})
export class HighlightV1Directive {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
