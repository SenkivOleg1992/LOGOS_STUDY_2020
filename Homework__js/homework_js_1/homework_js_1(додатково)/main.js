// 
let name = prompt('Your name');
let h = prompt('Main div height');
let w = prompt('Main div width');
let b = prompt('Main div backgroung');
let secondH = prompt('Second div height');
let secondW = prompt('Second div width');
let secondB = prompt('Second div background');

document.write(`<div style=' margin: 0 auto; font-size: 30px; text-align: center; border-radius: 10px; height: ${h}px; width: ${w}px; background: ${b};'> <div style=' margin: 10px auto; height: ${secondH}px; width: ${secondW}px; background-color: ${secondB};'></div>  ${name} </div>`);