import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';

@Component({
  selector: 'app-angular-blog17',
  templateUrl: './angular-blog17.component.html',
  styleUrls: ['./angular-blog17.component.scss']
})
export class AngularBlog17Component implements OnInit {
  userEmail: string;
  userPassword: string;

  titlePost: string;
  textPost: string;

  modalRefSign: BsModalRef;
  modalRefPost: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  };
  
  openModalSign(template: TemplateRef<any>) {
    this.modalRefSign = this.modalService.show(template);
  };

  openModalPost(addPost: TemplateRef<any>) {
    this.modalRefPost = this.modalService.show(addPost);
  };
  // sign in
  closeModal(): void{

  };
  submit(): void{
 
  };

  // post
  closePost(): void{

  };
  savePost(): void{

  };

}
