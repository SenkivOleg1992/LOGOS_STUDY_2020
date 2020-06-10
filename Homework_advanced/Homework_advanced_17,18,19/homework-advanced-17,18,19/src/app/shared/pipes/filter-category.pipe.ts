import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../interfaces/category.interface';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(cat: Array<ICategory>, name: string): unknown {
    if(!name) return cat;
    if(!cat) return '';
    else return cat.filter( categ => categ.nameCat.includes(name));
  }

}
