import { Component, OnInit, TemplateRef } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/models/product.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  adminCategory: Array<ICategory> = [];
  adminProducts: Array<IProduct> = [];

  category: ICategory;
  name: string;
  description: string;
  price: string;
  image: string;
  editID: number;
  filterProd: string;
  nameCat: string;
  isEdit = false;
  
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private catService: CategoriesService,
    private prodService: ProductsService
  ) {}
  ngOnInit(): void {
    this.getCategory();
    this.getProduct();
  };
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.isEdit = false;
    this.formReset();
  }
  private getCategory(): void {
    this.catService.getCategory().subscribe(data => {
      this.adminCategory = data;
    });
  };
  private getProduct(): void {
    this.prodService.getProduct().subscribe( data => {
      this.adminProducts = data;
    });
  };

  addProduct(): void{
    const product: IProduct = new Product(1, this.category,this.name,this.description,this.price, this.image);
    if(!this.isEdit) {
      if( this.adminProducts.length > 0) {
        product.id = this.adminProducts.slice(-1)[0].id + 1;
      };
      this.prodService.addProduct(product).subscribe(() => {
        this.getProduct();
      });
    } else {
      product.id = this.editID;
      this.prodService.updateProduct(product).subscribe(() => {
        this.getProduct();
      });
      this.isEdit = false;
    }
    this.formReset();
  };

  editProduct(prod: TemplateRef<any>, product: IProduct  ): void{
    this.isEdit = true;
    this.editID = product.id;
    this.modalRef = this.modalService.show(prod);
    this.category = product.category;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.image = product.image;
  };
  deleteProduct(prod: IProduct): void{
    this.prodService.deleteProduct(prod).subscribe(() => {
      this.getProduct();
    })
  };
  private formReset(): void{
    this.name = '';
    this.description = '';
    this.price = '';
  }

}
