import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  newTask: string;
  editTaskInput: string;
  editSaveInd: number;
  checkIn: boolean;
  status: string = 'In Progress';
  taskList: Array<string|any> = [
    { task: 'HTML5', check: this.checkIn, status: this.status},
    { task: 'CSS3', check: this.checkIn, status: this.status},
    { task: 'SCSS',  check: this.checkIn, status: this.status},
    { task: 'JavaScript',  check: this.checkIn, status: this.status},
    { task: 'jQuery',  check: this.checkIn, status: this.status},
    { task: 'Angular',  check: this.checkIn, status: this.status}
  ];
  countOfTasks = this.taskList.length;
  isEditVisible: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void{
    if(this.newTask !== ''){
      const newTask = { task: this.newTask, check: this.checkIn, status: this.status}
      this.taskList.push(newTask);
      this.newTask = '';
      this.countOfTasks = this.taskList.length;
    };
  };
  editTask(ind: number): void {
    this.editTaskInput = this.taskList[ind].task;
    this.isEditVisible = true;
    this.editSaveInd = ind;
  };
  deleteTask(ind: number): void {
    this.taskList.splice(ind, 1);
    this.countOfTasks = this.taskList.length;
    this.isEditVisible = false;
    this.editTaskInput = '';
  };
  saveTask(): void {
    this.taskList[this.editSaveInd].task = this.editTaskInput;
    this.isEditVisible = false;
    this.editTaskInput = '';
  };
  checkStatus(i: number, event: any): void {
    this.taskList[i].check = event.target.checked;
    if(event.target.checked === false){
      this.taskList[i].status = 'In Progress'
    } else {
      this.taskList[i].status = 'Done'
    }
  };
  
}
