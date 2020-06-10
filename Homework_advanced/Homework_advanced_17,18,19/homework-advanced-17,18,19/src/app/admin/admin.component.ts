import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/interfaces/category.interface';
import { CategoriesService } from '../shared/services/categories.service';
import { ProductsService } from '../shared/services/products.service';
import { IProduct } from '../shared/interfaces/product.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminCategory: Array<ICategory> = [];
  adminProduct: Array<IProduct> = [];

  constructor(
    private catServise: CategoriesService,
    private prodService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getProduct();
  };
  private getCategory(): void{
    this.catServise.getCategory().subscribe( data => {
      this.adminCategory = data;
    });
  };
  private getProduct(): void{
    this.prodService.getProduct().subscribe( data => {
      this.adminProduct = data;
    });
  };


}
