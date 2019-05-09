import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input() show: boolean;

  constructor(private e: ElementRef) {
  }

  ngOnInit() {
    if (!this.show) {
      this.e.nativeElement.style.display = 'none';
    }
  }

}
