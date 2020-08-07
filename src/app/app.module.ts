import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RepeatTimesDirective } from './repeat-times.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RepeatTimesDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
