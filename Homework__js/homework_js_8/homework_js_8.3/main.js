function getSqrt(number){
    if(number>0){
        alert('квадратний корінь:' + Math.sqrt(askSqrt));
    }else if(number != (number*1)){
        alert('Повинне бути числове значення')
    }else if(number<0){
        alert('Введіть додатнє число')
    }else if(number == ''){
        alert('Будь ласка, введіть число')
    };
}
let askSqrt = +prompt('write sqrt');
getSqrt(askSqrt);