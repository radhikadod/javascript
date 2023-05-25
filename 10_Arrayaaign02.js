
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const arrayLength = arrayNumbers.length;
console.log(`Length of array : ${arrayLength}`);
console.log("----------------------------------------------------------");
const firstElement = arrayNumbers[0];
console.log(`First element : ${firstElement}`);
const lastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(`Last Element : ${lastElement}`);
console.log("-------------------------------------------------------------");
 const thirdLastElement = arrayNumbers[arrayNumbers.length - 3];
 console.log(`Third last element of given array : ${thirdLastElement}`);
 console.log("-------------------------------------------------------------");
 
// // var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
//  for (const index in arrayNumbers) {
//     if (index%2===0) {
//         console.log(`Even number are: ${arrayNumbers[index]}`);

for (let index = 0; index <= arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 == 0) {
      console.log(`Even number are :  ${arrayNumbers[index]}`);
    }
}
console.log("-------------------------------------------------------------------");
for (let index = 0; index <= arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 == 1) {
      console.log(`Odd number are : ${arrayNumbers[index]}`);
    }
}
console.log("------------------------------------------------------------------------");

var evenSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (index % 2 == 0) {
    // console.log(`      ${element}`);
    evenSum += arrayNumbers[index];
  }
}
  console.log(` Total sum of even positioned elements is :  ${evenSum}`);
  console.log("--------------------------------------------------------------------------");

  oddSum = 0;
//   console.log(` 7}  Odd positioned elements are : `);
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index % 2 == 1) {
    //   console.log(`      ${element}`);
      oddSum += arrayNumbers[index]
    }
  }
  console.log(` Total Sum of odd positioned elemens is :  ${oddSum}`);
  console.log("---------------------------------------------------------------------------");
  var sum = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    sum += arrayNumbers[index];
    
  }
console.log(` Sum of all elements in given array is : ${sum}`);
// console.log("-----------------------------------------------------------------------------");

for (const index in arrayNumbers) {
    if (arrayNumbers[index] % 5 == 0) {
      console.log(`Multiple of 5 No are: ${arrayNumbers[index]}`);
    }
  }
  console.log("-------------------------------------------------------------------------------");

  console.log(
    ` Is Number "115" available in given array ?  ${arrayNumbers.includes(115)}`);
    // console.log("----------------------------------------------------------------");

    console.log(
        ` Is Number "23" available in given array ?  ${arrayNumbers.includes(23)}`);
        console.log("----------------------------------------------------------");
        arrayNumbers.splice(3, 0, 55, 66);
console.log(`Insert numbers 55,66 then new array will be : [${arrayNumbers}]`);

// console.log("------------------------------------------------------------------");

arrayNumbers.splice(4, 3);
console.log(` After deleting 3 elements starting from index 4 is : [${arrayNumbers}]`);
    
 
