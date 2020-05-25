let n = +prompt();
(n == 0) ? console.log('Число 0') :
    (n % 2 == 2 || n % 2 == 0) ? console.log('Число парне') :
        console.log('Число непарне');
