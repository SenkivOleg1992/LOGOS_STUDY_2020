let n = +prompt('введіть число');
function isPrime(n) {
    if (n < 2) {
      return 'Число повинне бути більше 1';
    } else if (n === 2) {
      return 'Просте число';
    }
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return 'складене число';
      }
      i +=1;
    }
    return 'Просте число';
}
console.log(isPrime(n))
// nextPrime:
// for (let i = 2; i <= n; i++) { 

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime; 
//   }
// }
// alert('Число');