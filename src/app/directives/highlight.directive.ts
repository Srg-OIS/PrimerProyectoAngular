import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    console.log('el:', el);
    el.nativeElement.style.backgroundColor = 'red';
  }

}
