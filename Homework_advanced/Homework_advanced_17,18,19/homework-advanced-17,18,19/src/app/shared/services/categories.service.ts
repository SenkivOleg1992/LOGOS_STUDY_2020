import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url: string;

  constructor( private http: HttpClient) {
    this.url = 'http://localhost:3000/categories'
  };
  getCategory(): Observable<Array<ICategory>>{
    return this.http.get<Array<ICategory>>(this.url)
  };
  // getCurrent(id: number): Observable<ICategory>{
  //   return this.http.get<ICategory>(`${this.url}/${id}`)
  // };
  addCategory(category: ICategory): Observable<Array<ICategory>>{
    return this.http.post<Array<ICategory>>(this.url, category)
  };
  deleteCategory( category: ICategory): Observable<Array<ICategory>>{
    return this.http.delete<Array<ICategory>>(`${this.url}/${category.id}`)
  };
  updateCategory( category: ICategory): Observable<Array<ICategory>>{
    return this.http.put<Array<ICategory>>(`${this.url}/${category.id}`, category)
  };
}
