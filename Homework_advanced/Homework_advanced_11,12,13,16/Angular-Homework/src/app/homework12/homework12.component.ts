import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { User } from './user.model';
import { isBuffer } from 'util';

@Component({
  selector: 'app-homework12',
  templateUrl: './homework12.component.html',
  styleUrls: ['./homework12.component.css']
})
export class Homework12Component implements OnInit {
  
  userLogin: string;
  userPassword: string;
  userEmail: string;

  userList: Array<IUser> = [];

  isEditVisible: boolean;
  isSaveHide: boolean;

  editUserInd: number;

  constructor( ) { 
  }
  ngOnInit(): void {
  }

  addUser(): void{
    let newUser: IUser = new User(this.userLogin, this.userPassword, this.userEmail);
    this.userList.push(newUser);
    this.userLogin = '' ; this.userPassword = ''; this.userEmail ='';
  };

  editUser(ind: number, user: IUser): void {
    this.userLogin = user.login;
    this.userPassword = user.password;
    this.userEmail = user.email;
    
    this.editUserInd = ind;
    this.isEditVisible = true;
    this.isSaveHide = true;
  };
  deleteUser(ind: number):void{
    this.userList.splice(ind, 1);
  };

  saveEditUser(): void{
    this.userList[this.editUserInd].login = this.userLogin;
    this.userList[this.editUserInd].password = this.userPassword;
    this.userList[this.editUserInd].email = this.userEmail;

    this.userLogin = '' ; this.userPassword = ''; this.userEmail ='';
    this.isEditVisible = false;
    this.isSaveHide = false;
  };
}
