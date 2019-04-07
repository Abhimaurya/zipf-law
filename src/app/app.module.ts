import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartContainerComponent,
    InputContainerComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
