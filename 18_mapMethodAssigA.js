
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

console.log("------Add 10 into each element------");
let arrayMap = arrayNumbers.map( (element) => {
    return element + 10;

})
console.log(arrayMap);

console.log("-------Square each element----------");
const arrayTrans = arrayNumbers.map( (element)=> {
    return element * element;
})
console.log(arrayTrans);

console.log("------Add index value into corresponding array element------");

const arrayIndex = arrayNumbers.map( (element,index)=> {
    return element + index;
})
console.log(arrayIndex);

