import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {

  arrBad: Array<any> = [];
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
    if(this.words === undefined ){
      this.isEmptyIn = true;
    } else {
      this.isEmptyIn = false;
      this.arrBad.push(this.words);
      this.badWords = this.arrBad.join(', ');
      this.words = undefined;
    }
  };
  checkWord(bad: string): string{
    this.stars = '*';
    return this.stars.repeat(bad.length)
  }

  btnReset(): void {
    this.arrBad = [];
    this.words = undefined;
    this.result = undefined;
    this.badWords = undefined;
  };
  btnCenzor(): void {
    if(this.result === undefined){
      this.isEmptyArea = true;
    } else{
      this.isEmptyArea = false;
      this.reg = RegExp(this.arrBad.join('|'),'gi');
      const replStr = this.result.match(this.reg);
      for ( let bad of replStr){
        this.result = this.result.replace(bad, this.checkWord(bad))
      }
    };
  };
}
