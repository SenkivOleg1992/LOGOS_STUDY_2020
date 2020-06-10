import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBlog } from '../interfaces/blog.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BlogsService {

  blog:Array<IBlog> = [];

  private url: string;

  constructor( private http: HttpClient) { 
    this.url = 'http://localhost:3000/blogs';
  };
  
  getBlogs(): Observable<Array<IBlog>>{
    return this.http.get<Array<IBlog>>(this.url)
  };
  addBlogs(blog: IBlog): Observable<Array<IBlog>>{
    return this.http.post<Array<IBlog>>(this.url, blog)
  };
  deleteBlogs(blog: IBlog): Observable<Array<IBlog>>{
    return this.http.delete<Array<IBlog>>(`${this.url}/${blog.id}`)
  };
  updateBlogs(blog: IBlog): Observable<Array<IBlog>>{
    return this.http.put<Array<IBlog>>(`${this.url}/${blog.id}`, blog)
  }



}
