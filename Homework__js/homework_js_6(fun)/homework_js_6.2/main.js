
let progression = (a,b) => {
    let suma = 0;
    let x = 1;
    for( let i = 1; i <= a; i++ ){
        if( i > 1){
            x *= b; 
        }
        console.log(x)
        suma += x
    }
    console.log(`Геометрична прогресія складає: ${suma}`)
};
let count = +prompt('кількість чисел прогресії');
let znam = +prompt('знаменник');
progression(count, znam);

//......................................6.2(other method )

let v = 1;
let s = 0;
let geo = function(n, q){
    for(i = 1; i<=n; i++){
    bn = v * (q**(i-1));
    console.log(bn)
    s = v*((1 - (q**n))/(1 - q))
    }
    console.log(`Геометрична прогресія складає: ${s}`)
}
geo(5,2)
geo(4,3)
