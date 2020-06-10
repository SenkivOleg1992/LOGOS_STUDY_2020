import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserlistComponent } from './works/userlist/userlist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    CenzorComponent,
    UserlistComponent,
    TasklistComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
