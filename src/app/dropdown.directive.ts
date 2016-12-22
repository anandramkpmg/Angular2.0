import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  constructor() { }

  private isOpen = false;

  @HostBinding('class.open') get Opened()
  {
    return this.isOpen;
  }

  @HostListener('click') open()
  {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close()
  {
    this.isOpen = false;
  }

  @HostListener('mouseover') mouseOveropen(){
    this.isOpen = true;
  }

}
