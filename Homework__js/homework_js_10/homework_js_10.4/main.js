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