import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userLogin: string;
  userPassword: string;
  userEmail: string;
  userList: Array<IUser> = [];
  isEditVisible: boolean;
  isSaveHide: boolean;
  editIndex: number;

  constructor( ) { 
  }
  ngOnInit(): void {
  }

  addUser(): void {
    let newUser: IUser = new User(this.userLogin, this.userPassword, this.userEmail);
    this.userList.push(newUser);
    this.userLogin = '', this.userPassword = '',  this.userEmail = '';
  };
  editUser(i:number, user: IUser): void {
    this.userLogin = this.userList[i].login;
    this.userPassword = this.userList[i].password;
    this.userEmail = this.userList[i].email;

    this.isEditVisible = true;
    this.isSaveHide = true;
    this.editIndex = i;
  };
  deleteUser(ind: number): void {
    this.userList.splice(ind, 1);
  };
  saveEditUser(): void {
    this.userList[this.editIndex].login = this.userLogin;
    this.userList[this.editIndex].password = this.userPassword;
    this.userList[this.editIndex].email = this.userEmail;
    this.userLogin = '', this.userPassword = '',  this.userEmail = '';

    this.isEditVisible = false;
    this.isSaveHide = false;
  };
};

interface IUser {
  login: string;
  password: string;
  email: string;
};

class User implements IUser {
  constructor(
    public login: string,
    public password: string,
    public email: string
  ){}
};