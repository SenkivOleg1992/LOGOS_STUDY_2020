import { Component, OnInit, TemplateRef, ViewChild, } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-homework16',
  templateUrl: './homework16.component.html',
  styleUrls: ['./homework16.component.css']
})


export class Homework16Component implements OnInit {

  searchName: string;
  usersPhone: Array<any> = [
    { firstName: 'Petya', lastName: 'Zhuk', number: '0631111111'},
    { firstName: 'Petro', lastName: 'Petriv', number: '0631222222'},
    { firstName: 'Alejandro', lastName: 'Del Rio Albrechet', number: '0633333333'},
    { firstName: 'Vasylyna', lastName: 'Vrublevska', number: '0635555555'},
    { firstName: 'Ira', lastName: 'Tytar', number: '0636666666'},
    { firstName: 'Sofia', lastName: 'Zhuk', number: '0637777777'},
  ];

  saveIndex : number;
  modalFirstName: string;
  modalLastName: string;
  modalNumber: string;
  isSaveEdit: boolean;
  user: Array<any>;

  displayedColumns: string[] = ['firstName', 'lastName', 'number','edit','delete' ];
  dataSource = new MatTableDataSource(this.usersPhone);

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalFirstName = '', this.modalLastName = '', this.modalNumber = '';
    this.isSaveEdit = false;
  };

  edit(addUser: TemplateRef<any>, i: number): void {
    this.modalRef = this.modalService.show(addUser);
    this.modalFirstName = this.usersPhone[i].firstName;
    this.modalLastName = this.usersPhone[i].lastName;
    this.modalNumber = this.usersPhone[i].number;
    this.saveIndex = i;
    this.isSaveEdit = true;
  };

  delete(i: number): void {
    this.usersPhone.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.usersPhone);
    this.dataSource.sort = this.sort;
  };

  addSave(addUser: TemplateRef<any> ): void{
    if(this.modalFirstName !== '' && this.modalLastName !== '' && this.modalNumber !== ''){
      const newUser = { firstName: this.modalFirstName, lastName: this.modalLastName, number: this.modalNumber};
      this.usersPhone.push(newUser);

      this.dataSource = new MatTableDataSource(this.usersPhone);
      this.dataSource.sort = this.sort;
      this.resetForm();
    }
  };

  saveEdit( ): void{
    this.usersPhone[this.saveIndex].firstName = this.modalFirstName;
    this.usersPhone[this.saveIndex].lastName = this.modalLastName;
    this.usersPhone[this.saveIndex].number = this.modalNumber;
  };
  resetForm(): void {
    this.modalFirstName = '';
    this.modalLastName = '';
    this.modalNumber = '';
  };

  filter(event: Event) {
    const filtVal = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtVal.trim().toLowerCase();
  };

  // firstNameSort(): void {
  //   this.usersPhone = this.usersPhone.sort(function(a,b):any {
  //     let x = a.firstName.toLowerCase();
  //     let y = b.firstName.toLowerCase();
  //     if(x < y){
  //       return -1
  //     }
  //     if (x > y){
  //       return 1
  //     }
  //     return 0
  //   })
  // };

}

