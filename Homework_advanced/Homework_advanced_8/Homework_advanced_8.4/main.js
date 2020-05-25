function getSqrt(num = +prompt()) {
    if (num != num * 1) {
        console.log('Повинне бути числове значення');
    }
    if (num == 0) {
        console.log('Будь ласка, введіть число!');
    }
    else if (num < 0) {
        console.log('Введіть додатнє число.');
    }
    else {
        console.log(Math.sqrt(num));
        return Math.sqrt(num);
    }
}
;
getSqrt();
