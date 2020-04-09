let getSec = x => document.querySelector(x);

getSec('.box').onmouseover = function(){
    this.style.backgroundColor = 'yellow';
    this.style.border = '2px solid green';
    this.innerText = 'Хочеш знати який?'
    this.style.color = 'black'
}
getSec('.box').onmousedown = function(){
    this.style.backgroundColor = 'black';
    this.style.borderColor = 'yellow';
    this.style.color = 'white';
    this.innerText = 'А я тобі не скажу!';
}
getSec('.box').onmouseup = function(){
    this.style.backgroundColor = 'yellow';
    this.style.border = '2px solid green';
    this.innerText = 'Хочеш знати який?'
    this.style.color = ''
}
getSec('.box').onmouseout = function(){
    this.style.backgroundColor = '';
    this.style.color = 'blue'
    this.innerText = 'У мене є секрет!'
}