import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework11',
  templateUrl: './homework11.component.html',
  styleUrls: ['./homework11.component.css'],
})
export class Homework11Component implements OnInit {
  arrWords = [];
  badWords: string;
  words: string;
  result: string;
  stars: string;
  isEmptyIn: boolean;
  isEmptyArea: boolean;
  reg: RegExp;

  constructor() {}

  ngOnInit(): void {}

  btnAdd(): void {
    if( this.words === undefined){
      this.isEmptyIn = true;
    } else {
      this.isEmptyIn = false;
      this.arrWords.push(this.words);
      this.badWords = this.arrWords.join(',');
      this.words = undefined;
    }
  }

  btnReset(): void {
    this.arrWords = [];
    this.words = '';
    this.result = undefined;
  };
  replStr(bad: string): string {
    this.stars = '*';
    return this.stars.repeat(bad.length);
  }

  btnCenzor(): void {
    if(this.result === undefined){
      this.isEmptyArea = true;
    } else {
      this.isEmptyArea = false;
      this.reg = RegExp(this.arrWords.join('|'),'gi');
      const arr = this.result.match(this.reg);
      for( const bad of arr){
        this.result = this.result.replace(bad, this.replStr(bad))
      }
    }
  };

};
