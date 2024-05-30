import { Directive, ElementRef, Host, HostListener, Input, input } from "@angular/core";

@Directive({
    selector: "[appRenklendir]"
})

export class RenklendirDirective {

    @Input() appRenklendir: string = "";
    @Input() test: string = "0"



    constructor(
        private _el: ElementRef
    ) {
        //    this._el.nativeElement.style.backgroundColor = "Black"
        //     this._el.nativeElement.className=   "form-control"
    }

    @HostListener("mouseenter") metot() {
        this._el.nativeElement.style.backgroundColor = this.appRenklendir;
   console.log(this.test);
   
    }

    @HostListener("mouseleave") metot2() {
        this._el.nativeElement.style.backgroundColor = "white"
    }

}
