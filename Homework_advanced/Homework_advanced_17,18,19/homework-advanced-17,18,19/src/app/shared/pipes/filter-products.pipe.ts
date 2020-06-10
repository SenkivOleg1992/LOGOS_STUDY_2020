import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(prod: Array<any>,name: string): unknown {
    if(!name) return prod;
    if(!prod) return '';
    else return prod.filter( product => product.category.includes(name));
  }

}
