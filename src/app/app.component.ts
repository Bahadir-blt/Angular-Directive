import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 appRenklendir="yellow" style="cursor: pointer;">Directive</h1>
  <a appMyRouting="/c1" href="">Comp1</a>  || <a appMyRouting="/c2" href="">Comp2</a>
 <router-outlet></router-outlet>
 `,
 
})
export class AppComponent {
  title = 'Directive';
}
