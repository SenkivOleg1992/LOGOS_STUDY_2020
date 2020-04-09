// перше завдання

// let str = 'Hello';
// // charAT()
// for(let i = 0; i<str.length; i++){
//     // console.log(str[i])
//     console.log(str.charAt(i))
// };
//
// let ask = prompt('write something');
// let res = ask.charAt(0).toUpperCase();
// for(let i = 1; i<ask.length; i++){
//     res += ask.charAt(i).toLowerCase();
// };

// console.log(res);
// //

// let st1 = 'Hello';
// console.log(st1.indexOf('l'));
//
//
// let ask = prompt('Write something');
// ask = ask.toLowerCase();

// if(ask.indexOf('html') != -1 || ask.indexOf('css') != -1){
//     console.log('yessss')
// }else{
//     console.log('noooooooo')
// };
// //
let str4 = "JavaScript";
console.log(str4.substring(4, 7));

// let str5 = "JavaScript";
// console.log(str5.substr(4, 4));

// let ask = prompt('write something');
// let zmin = ask.charAt(0).toUpperCase() + ask.slice(1).toLowerCase();
// console.log(zmin)

// let str6 = 'food';
// let str7 = 'foode';
// console.log(str6.includes(str7));

// let str8 = 'olegsenliv@mail.rus';
// console.log(str8.endsWith('ru'));

// let str9 = 'olegsenliv@mail.rus';
// console.log(str9.startsWith('ol'));

// let st1 = "argrdg";
// let repeatSt = st1.repeat(10);
// console.log(repeatSt);

// let ask = prompt('write something');
// let res = '';

// for(let i = ask.length; i>=0; i--){
//     res += ask.charAt(i);
// };
// console.log(res);

//
// Завдання 1
// Користувач вводить текст в prompt. Потрібно порахувати і вивести кількість пробілів, які
// були введені.
// ------------------------------------------------------------------------------------------
// let askProb = prompt('write something with probil');
// let sumProb = '';

// if(askProb.indexOf(' ') < 0){
//     console.log('Тут немає пробілів')
// }else if(askProb.includes(' ')){
//     for(let i = 0; i<=askProb.length; i++){
//         if(askProb.includes(' ')){
//             sumProb += 1;
//         }
//     }
//     console.log(`тут є: ${sumProb} пробіли`)
// }
// друге завдання
// let askEmail = prompt('write your email');

// if(askEmail.includes('@')){
//     console.log('Welcome')
// }else if(askEmail.startsWith('@')){
//     console.log('email не повинен починатись на ,@,')
// }else if(askEmail.endsWith('@')){
//     console.log('email не повинен закінчуватись на ,@,')
// }else{
//     console.log('Email маэ складатись із @')
// };

// третє
// Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті
// декілька разів). Потрібно, вивести в консолі загальну кількість слів html у введеному
// тексті.
// Приклад роботи:
// Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.

// let askHtml = prompt('write something');

// askHtml = askHtml.charAt().toLowerCase();
// let count = 0;
// for(let i = );
// третє  завдання
// //
// let askAddress = prompt('URL адреса');

// if(askAddress.includes('https:')){
//     console.log(askAddress.slice(8));
// }else if(askAddress.includes('http:')){
//     console.log(askAddress.slice(11))
// }else{
//     console.log('URL address is not correct')
// };

// let arr = [10,20,30,40,50];

// for(let i = 0; i<arr.length; i++){
//     arr[i] += 5
//     // console.log(arr)
// }

// console.log(arr)
//
// let arr = prompt('СКІлькки пар цифр');

// let a = [], b = [], c = [];

// for(let i = 0; i < arr; i++){
//     a[i] = +prompt('Вкажіть цифри у перший масив')
// }
// for(let j = 0; j < arr; j++){
//     b[j] = +prompt('Другий масив')
//     c[j] = a[j] + b[j]
// }
// // for(let j = 0; j<b.length; i++){
// //     b[j]
// //     c[j] = a + b
// // }
// console.log(a)
// console.log(b)
// console.log(c)

// let salad = ['orange','salat','apple','cottage'];
// console.log(salad)
// let saladStr = salad.join(' ');
// console.log(saladStr);
// //
// let saladSort = salad.sort();
// console.log(salad)
// console.log(saladSort)
// //
// // Sort.num
// let numbers = [2,8,5,56,99,4]
// console.log(numbers)
// let numSort = numbers.sort(function(a,b){
//     return a - b
// })
// console.log(numbers)
// console.log(numSort)

// let saladRev = salad.reverse();
// console.log(saladRev)
// // shift
// let shift = salad.shift();
// console.log(salad);
// console.log(shift)
// // unshift
// let unshift = salad.unshift('Banana');
// console.log(salad);
// console.log(unshift)
// //pop
// let pop = salad.pop();
// console.log(pop);
// console.log(salad)
// //push
// let push = salad.push('ggg','fasfg');
// console.log(push);
// console.log(salad)
// //splice
// let splice = salad.splice(salad.length,0, 'Ivan', 'PEtro');
// console.log(salad);
// console.log(splice)
// //

// let arr1 = ['Ivan','Vasil','Oleg'];

// arr1.forEach(function(val,ind,arr){
//     console.log(val,ind, arr )
// })

// //
// for(let key in arr1){
//     console.log(key, arr1[key])
// }//

// for(let key of arr1){
//     console.log(key)
// }
// //
// let ask = +prompt('вкажіть числло');
// let step = +prompt('STepin');

// function foo(a,b){
//     let res = 1;
//     if(step<0){
//         step = -step
//     }
//     for(let i = 1; i<=step; i++){
//         res = res * ask;
//     }
//     console.log(res)
// }

// foo()
// //
// //
// //

// function sayHello(name,second){
//     console.log(`Hello ${name} ${second}`)
// }

// for(let i = 0; i<3; i++){
//     let res = prompt('Write yor name');
//     let sec = prompt('write second')
//     sayHello(res,sec);
// }
// завдання 1
//
// const arr = [0,0,0];
// function arrCopy(arr){
//     arr = arr.splice(0,3,);
//     return arr;
// }

// const arr1 = arrCopy([1,2,3]);
// const arr2 = arrCopy([1,2,3,[10,20]]);

// console.log(arr)
// console.log(arr1);
// console.log(arr2);
//
// Завдання 2
// let arr = [1,2,3];

// function arrToString(arr){
//     arr = arr.join().split();
//     return arr;
// }

// const arr1 = arrToString([1,2,3]);
// const arr2 = arrToString([10,200,3333]);

// console.log(arr)
// console.log(arr1);
// console.log(arr2);
// 
// 
// Третє завдання
// 
// function getLength(arr){
//     let c = [];
//     for(let key in arr){
//         c[key] = arr[key].length
//     }
//     return c;
// }

// const arr1 = getLength(['Ivan','Pavlo','Ira']);
// const arr2 = getLength(['Oleksiy','Andriana']);

// console.log(arr1)
// console.log(arr2)
//
// 
// четверте завдання
// // 
// function removeDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++){
//     let item = arr[i];
//     if(result.indexOf(item) === -1) {
//         result.push(item);
//     }
//   } 
//   return result;
// }

// const arr1 = removeDuplicates(["htm", "css", "html", "js"]);
// const arr2 = removeDuplicates(["html","css", "js","html","js","python","js","scss"]);

// console.log(arr1);
// console.log(arr2)

function removeDuplicates(arr){
    let result = [];
    for(let i = 0; i<arr.length; i++){
        let wrong = arr[i];
        if(result.indexOf(wrong) === -1){
            result.push(wrong);
        }
    }
    return result;
}
const arr1 = removeDuplicates(["htm", "css", "html", "js"]);
const arr2 = removeDuplicates(["html","css", "js","html","js","python","js","scss"]);

console.log(arr1);
console.log(arr2);