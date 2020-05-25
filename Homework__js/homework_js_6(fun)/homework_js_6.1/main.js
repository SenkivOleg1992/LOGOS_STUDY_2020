let fibanachi = n => {
    let a = 1;
    let b = 0;
    console.log(a)
    for(let i = 1; i<n; i++){
        let x  = a + b
        if(a<b){
            a = x
        } else {
            b = x
        }
    }
}
fibanachi(5)
fibanachi(10)
