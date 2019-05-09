import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  constructor(private e: ElementRef) {

  }

  @HostListener('dblclick')
  onHover() {
    console.log(this.e.nativeElement.style.fontSize)
    this.e.nativeElement.style.fontSize = (parseInt(this.e.nativeElement.style.fontSize)) + 2 + 'px'
  }

}
