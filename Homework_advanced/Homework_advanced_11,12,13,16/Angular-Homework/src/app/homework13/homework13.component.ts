import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework13',
  templateUrl: './homework13.component.html',
  styleUrls: ['./homework13.component.css']
})
export class Homework13Component implements OnInit {

  newTask: string;
  check: boolean;
  status: string = 'In Progress';
  arrTasks: Array<string|any> = [
    {task: 'HTML5', check: this.check, status: this.status},
    {task: 'CSS3', check: this.check, status: this.status},
    {task: 'SCSS', check: this.check, status: this.status},
    {task: 'JavaScript', check: this.check, status: this.status},
    {task: 'jQuery', check: this.check, status: this.status},
    {task: 'Angular', check: this.check, status: this.status},
  ];
  editTaskInput: string;
  isEditVisible: boolean;
  countOfTasks:number = this.arrTasks.length;
  editInd: number

  constructor() { }

  ngOnInit(): void {
  }
  addTask(): void {
    if(this.newTask !== ''){
      const newTask = {task: this.newTask, check: this.check, status: this.status};
      this.arrTasks.push(newTask);
      this.countOfTasks = this.arrTasks.length;
      this.newTask = '';
    }
  };
  deleteTask(ind: number): void {
    this.arrTasks.splice(ind, 1);
    this.countOfTasks = this.arrTasks.length;
    this.editTaskInput = '';
    this.isEditVisible = false;
  };
  editTask(ind: number): void {
    this.editTaskInput = this.arrTasks[ind].task;
    this.editInd = ind;
    this.isEditVisible = true;
  };
  saveTask(): void {
    this.arrTasks[this.editInd].task = this.editTaskInput;
    this.isEditVisible = false;
    this.editTaskInput = '';
  };
  checkStatus(ind: number, event: any): void {
    this.arrTasks[ind].check = event.target.checked;
    if( event.target.checked === true){
      this.arrTasks[ind].status = 'Done';
    } else {
      this.arrTasks[ind].status = 'In Progress';
    }
  };
}
