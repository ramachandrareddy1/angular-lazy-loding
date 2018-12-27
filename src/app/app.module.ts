import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LazyComponent } from './lazy/lazy.component';
//import { EagerComponent } from './eager/eager.component';

@NgModule({
  declarations: [
    AppComponent,
  //  LazyComponent,
    //EagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
