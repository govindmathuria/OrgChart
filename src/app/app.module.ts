import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChartComponentComponent]
})
export class AppModule { }
