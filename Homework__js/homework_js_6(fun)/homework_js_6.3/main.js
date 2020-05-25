let simple = (a, b) => {
    for(let i = a; i < b; i++){
        let n;
        console.log(n)
        for(n = 2; n < i; n++){
            if(i%n == 0){
                break
            }
        }
        if( i == n) console.log(i)
    }
};
let start = +prompt('number starts');
let end = +prompt('number ends');

simple(start, end);