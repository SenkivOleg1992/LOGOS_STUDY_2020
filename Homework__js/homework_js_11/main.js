//
let fon = prompt('color of fon page');
let styleText = prompt('style of text');
let zah = prompt('вирівнювання для заголовка');
let parFon = prompt('фон для параграфа');
let colorTextPar = prompt('колір тексту у параграфі');
let colorDiv = prompt('колір тексту у div');
let fontSizeDiv = prompt('розмір тексту div');
let weight = prompt("font-weight");

let p = document.querySelector('p');
p.style.background = parFon;
p.style.display = 'block'

let colHref = prompt('color of href');
for (let i = 0; i < p.children.length; i++) {
    p.children[i].style.color = colHref;
}
p.style.color = colorTextPar;

let listStyleType = prompt('style type of ul');
let ul = document.querySelector('ul');
ul.style.listStyleType = listStyleType;

let h1 = document.querySelector('h1');
h1.style.textAlign = zah;

let div = document.querySelector('div');
div.style.color = colorDiv;
div.style.fontSize = fontSizeDiv + 'px';
div.style.fontWeight = weight + 'px';
document.body.style.background = fon;
document.body.style.fontFamily = styleText;