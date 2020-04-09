let getSel = x => document.querySelector(x);
let color = ['red', 'green', 'blue'];
let i = 0;

getSel('.block').onmouseover = function(event){
    this.style.backgroundColor = `${color[i]}`;
    if(i<2) i++
    else i = 0;
}
getSel('.block').onmouseout = function(){
    this.style.backgroundColor = '';
}