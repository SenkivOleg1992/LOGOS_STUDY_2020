let num = +prompt('Number');
let step = +prompt('Step');
let res = 1;
if(step>=0){
    for(let i = 1; i<=step; i++){
        res = res *num;
    }
}else if(step<0){
    step = -step;
    for(let i = 1; i<=step; i++){
        res = res *num;
    }
    res = 1/ res;
}
console.log(res);