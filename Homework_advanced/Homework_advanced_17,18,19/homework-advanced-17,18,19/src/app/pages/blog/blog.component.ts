import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/blog.interface';
import { BlogsService } from 'src/app/shared/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: Array<IBlog> = [];

  constructor(
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  };
  private getBlogs(): void{
    this.blogsService.getBlogs().subscribe(data => {
      this.blogs = data;
    }, err => {
      console.log(err)
    });
  };

}
