import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputRainbow]'
})
export class InputRainbowDirective {
  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keydown') setColor() {
    const rainbow = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[rainbow];
  }
}
