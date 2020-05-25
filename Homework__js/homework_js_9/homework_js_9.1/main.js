let askProb = prompt('write something with probil');
let sumProb = askProb.indexOf(' ');

if(sumProb < 0){
    console.log('Тут немає пробілів')
}else {
    let suma = 0;
    for(let i = 0; i<=askProb.length; i++){
        if(askProb.indexOf(' ',i) == i){
            suma += 1;
        }
    }
    console.log(`тут є: ${suma} пробілів`)
}
