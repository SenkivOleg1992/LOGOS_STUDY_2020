let askHtml = prompt('write something');
let includ = askHtml.indexOf('html');

if(includ < 0) {
    console.log('Not found html')
} else {
    let suma = 0;
    for( let i = 0; i< askHtml.length; i++){
        if(askHtml.indexOf('html',i) == i){
            suma += 1;
        }
    }
    console.log(`Тут є: ${suma} html`)
}
