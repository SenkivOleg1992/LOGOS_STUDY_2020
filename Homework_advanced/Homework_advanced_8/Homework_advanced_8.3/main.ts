function numMax(a:number, b:number, ...arguments:number[]):number{
    return Math.max(a,b,...arguments)
};
console.log(numMax(2,99,0,-8,90))
