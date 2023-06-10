

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log("----Numbers > 50 -----");
const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element > 50;

})
console.log(arrayGreaterThan50);

console.log("------Even numbers------");
const evenNumbers = arrayNumbers.filter( (element)=> {
    return element%2==0;
    
})
console.log(evenNumbers);

console.log("-----Odd numbers------");
const oddNumbers = arrayNumbers.filter( (element)=> {
    return element%2!=0;
})
console.log(oddNumbers);

console.log("------Multiple of 5-------");
const arrayMultiple = arrayNumbers.filter( (element)=>{
    return element%5==0;  //Multiples of 5
})
console.log(arrayMultiple);

console.log("------Numbers which are between 20 and 50-------");
const arrayNum = arrayNumbers.filter( (element)=> {
    return element>20  && element<50;
})
console.log(arrayNum);