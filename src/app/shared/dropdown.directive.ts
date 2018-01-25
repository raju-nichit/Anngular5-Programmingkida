import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;
  @HostBinding('class.open') isOpen = false;

  constructor() {
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
