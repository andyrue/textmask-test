import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import MaskedInput from 'angular2-text-mask'

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, MaskedInput ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
