import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[NumericInput]'
})
export class NumericInputDirective {

    constructor(private el: ElementRef) { }

    @Input() NumericInput: boolean;
    @Input() latestInputValue: number;
    @Input() minValue: number;
    @Input() maxValue: number;

    @HostListener('keyup', ['$event']) onKeyUp(event) {
        let e: any = event;
        let value = e.target.value;

        if (this.NumericInput) {
          if (value < this.minValue) {
            e.target.value = this.minValue;
            value = this.minValue;
          } else if (value > this.maxValue) {
            e.target.value = this.maxValue;
          }
        }
    }

    @HostListener('click', ['$event']) onClick(event) {
        event.target.select();
    }
}
