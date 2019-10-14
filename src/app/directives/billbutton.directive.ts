import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBillbutton]'
})
export class BillbuttonDirective {
  constructor(private el: ElementRef) {}
}
