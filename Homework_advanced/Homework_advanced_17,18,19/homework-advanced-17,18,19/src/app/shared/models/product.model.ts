import { IProduct } from '../interfaces/product.interface';
import { ICategory } from '../interfaces/category.interface';

export class Product implements IProduct{
    constructor(
        public id: number,
        public category: ICategory,
        public name: string,
        public description: string,
        public price: string,
        public image?: string
    ){}
}