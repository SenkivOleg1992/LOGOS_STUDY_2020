function outer(){
    let n = 0;
    function inner(x){
        console.log(n += x)
    };
    return inner;
};
let sum = outer();
sum(0);
sum(3);
sum(5);
sum(228);