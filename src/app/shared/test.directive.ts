import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
  selector: '[appTestDirective]'
})
export class TestDirective {

  constructor(private tempRef: TemplateRef<any>, private  vcf: ViewContainerRef) {

  }

  @Input() set myDirective(isHidden: boolean) {
    if (isHidden) {
      this.vcf.createEmbeddedView(this.tempRef);
    } else {
      this.vcf.clear();
    }
  }


}
