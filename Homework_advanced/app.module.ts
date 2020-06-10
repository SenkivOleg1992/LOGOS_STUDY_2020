import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework11Component } from './homework11/homework11.component';
import { Homework12Component } from './homework12/homework12.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Homework13Component } from './homework13/homework13.component';
import { HeaderComponent } from './component/header/header.component';
import { Homework16Component } from './homework16/homework16.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    AppComponent,
    Homework11Component,
    Homework12Component,
    Homework13Component,
    HeaderComponent,
    Homework16Component,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
