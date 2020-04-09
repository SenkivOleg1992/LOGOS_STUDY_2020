// // Завдання 2

function getArea(number){
    if(number>0){
        alert(Math.PI * (askArea*askArea))
    }else if(number != (number*1)){
        alert('Повинне бути числове значення')
    }else if(number<0){
        alert('Повинне бути додатнє числове значення')
    }else{
        alert('Будь ласка, введіть радіус!')
    }
}
let askArea = prompt('Area');

getArea(askArea);