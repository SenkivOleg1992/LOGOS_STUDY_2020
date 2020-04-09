// Користувач вводить текст в prompt. Потрібно порахувати і вивести кількість пробілів, які
// були введені.
let askProb = prompt('write something with probil');
let sumProb = '';

if(askProb.indexOf(' ') < 0){
    console.log('Тут немає пробілів')
}else if(askProb.includes(' ')){
    for(let i = 0; i<=askProb.length; i++){
        if(askProb.includes(' ')){
            sumProb ++;
        }
    }
    console.log(`тут є: ${sumProb} пробіли`)
}