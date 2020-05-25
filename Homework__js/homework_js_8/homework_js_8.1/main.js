function getDigits(number){
    let fixed = number.toString().split('.')[1].length;
    let drib = number - Math.floor(number);
    console.log(drib.toFixed(fixed));
};
getDigits(1.234);
getDigits(23.8476);
