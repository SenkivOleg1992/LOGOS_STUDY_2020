import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/blog.interface';
import { BlogsService } from 'src/app/shared/services/blogs.service';
import { Blog } from 'src/app/shared/models/blog.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent implements OnInit, OnDestroy {

  titleBlog: string;
  textBlog: string;
  date =  ' 25 05 2020'
  authorBlog: string;
  adminBlogs: Array<IBlog> = [];
  isEdit = false;
  editID: number;

  private subcription: Subscription

  constructor(
    private blogsService: BlogsService,
  ) { }

  ngOnInit(): void {
    this.getAdminBlogs();
  };
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  };

  private getAdminBlogs(): void{
    this. subcription = this.blogsService.getBlogs().subscribe(data => {
      this.adminBlogs = data;
    }, err => {
      console.log(err)
    });
  };
  addBlogPost(): void {
    const newBl: IBlog = new Blog (1, this.titleBlog, this.textBlog, this.date, this.authorBlog);
    if(!this.isEdit){
      if(this.titleBlog !== '' && this.textBlog !== '' && this.authorBlog !== ''){
        if(this.adminBlogs.length > 0) {
          newBl.id = this.adminBlogs.slice(-1)[0].id + 1;
        }
        this.blogsService.addBlogs(newBl).subscribe(() => {
          this.getAdminBlogs();
        });
      }
    } else {
      newBl.id = this.editID;
      this.blogsService.updateBlogs(newBl).subscribe(()  =>{
        this.getAdminBlogs();
      });
      this.isEdit = false;
    };
    this.resetForm();
  };
  editBlog( blog: IBlog): void{
    this.isEdit = true;
    this.editID = blog.id;
    this.titleBlog = blog.title;
    this.textBlog = blog.text;
    this.authorBlog = blog.author;
  };
  // saveEditBlog( ): void {
  //   this.blogsService.getBlogs().subscribe()
  //   this.adminBlogs[this.editID].title  = this.titleBlog;
  //   this.adminBlogs[this.editID].text  = this.textBlog;
  //   this.adminBlogs[this.editID].author  = this.authorBlog;

  //   this.isEdit = false;
  //   this.resetForm();
  // };
  deleteBlog( blog: IBlog): void{
    this.blogsService.deleteBlogs(blog).subscribe(() => {
      this.getAdminBlogs();
    })
  };
  private resetForm(): void{
    this.titleBlog = '';
    this.textBlog = '';
    this.authorBlog = '';
  };
}
