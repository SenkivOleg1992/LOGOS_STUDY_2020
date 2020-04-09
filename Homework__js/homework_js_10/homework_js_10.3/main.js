function getLength(arr) {
    let c = [];
    for (let key in arr) {
        c[key] = arr[key].length
    }
    return c;
}

const arr1 = getLength(['Ivan', 'Pavlo', 'Ira']);
const arr2 = getLength(['Oleksiy', 'Andriana']);

console.log(arr1)
console.log(arr2)