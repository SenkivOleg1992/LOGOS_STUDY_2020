import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  filterCateg: string;
  nameCat: string;
  modalRef: BsModalRef;
  categoryID: number;
  
  adminCategory: Array<ICategory> = [];
  isEdit = false;
  isEmpty = false;

  constructor(
    private modalService: BsModalService,
    private catService: CategoriesService
    ){
  }

  ngOnInit(): void {
    this.getAdminCategory()
  };

  private getAdminCategory(): void{
    this.catService.getCategory().subscribe( data => {
      this.adminCategory = data;
    });
  };

  openModal(categor: TemplateRef<any>) {
    this.modalRef = this.modalService.show(categor);
    this.isEdit = false;
    this.resetForm();
  };
  public addCategory(): void {
    const newCateg: ICategory = new Category(1, this.nameCat );
    if(this.nameCat !== '') {
      if(!this.isEdit) {
        if(this.adminCategory.length > 0) {
          newCateg.id = this.adminCategory.slice(-1)[0].id + 1;
        };
        this.catService.addCategory(newCateg).subscribe(() => {
          this.getAdminCategory();
        })
      } else {
        newCateg.id = this.categoryID;
        this.catService.updateCategory(newCateg).subscribe(() => {
          this.getAdminCategory();
        });
        this.isEdit = false;
      };
    };
    this.resetForm();
  };
  editCategory( categor: TemplateRef<any>, category: ICategory): void {
    this.isEdit = true;
    this.categoryID = category.id;
    this.modalRef = this.modalService.show(categor);
    this.nameCat = category.nameCat;
  };
  public deleteCategory(category: ICategory): void {
    this.catService.deleteCategory(category).subscribe(() => {
      this.getAdminCategory();
    })
  };
  resetForm(): void {
    this.nameCat = '';
  }

}
