const arr = [0, 0, 0];

function arrCopy(arr) {
    arr = arr.splice(0, 4, );
    return arr;
}

const arr1 = arrCopy([1, 2, 3]);
const arr2 = arrCopy([1, 2, 3, [10, 20]]);

console.log(arr)
console.log(arr1);
console.log(arr2);