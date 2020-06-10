import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularBlog17Component } from './angular-blog17/angular-blog17.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { PizzaComponent } from './pages/pizza/pizza.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';
import { FilterCategoryPipe } from './shared/pipes/filter-category.pipe';
import { FilterProductsPipe } from './shared/pipes/filter-products.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AngularBlog17Component,
    HeaderComponent,
    FooterComponent,
    PizzaComponent,
    HomeComponent,
    ProductsComponent,
    BlogComponent,
    AboutComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    AdminBlogsComponent,
    FilterCategoryPipe,
    FilterProductsPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
