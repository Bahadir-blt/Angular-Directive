import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RenklendirDirective } from './renklendir.directive';
import { MyRoutingDirective } from './my-routing.directive';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    RenklendirDirective,
     MyRoutingDirective,
     C1Component,
     C2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"c1",
        component: C1Component
      },
      {
        path:"c2",
        component: C2Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
