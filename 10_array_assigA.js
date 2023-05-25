

const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];

const firstElement = arrayFruits[0];
console.log(`First element of given array:${firstElement}`);
const lastElement = arrayFruits[4];
console.log(`Last element of given array:${lastElement}`);
console.log("--------------------------------------------------");
// ADDING element in first position
const firstPosition = arrayFruits.unshift("Papaya");
console.log(`First Position: ${arrayFruits}`);
console.log("----------------------------------------------------");
// Remove Mango from the array
arrayFruits.splice(4,1);
console.log(`Remove element in array: ${arrayFruits}`);
console.log("------------------------------------------------------");
// Insert an element pineapple at the last position
arrayFruits.push("Pineapple");
console.log(`Add element in array: ${arrayFruits}`);
console.log("----------------------------------------------------------");
// Insert an element dragon fruit before water melon
arrayFruits.splice(4,0,"Dragon fruit");
console.log(`Insert an element: ${arrayFruits}`);
console.log("------------------------------------------------------------");
// Replace an element Orange with kiwi
arrayFruits.splice(2,1,"Kiwi");
console.log(`Replace element: ${arrayFruits}`);
console.log("---------------------------------------------------------------");
// Log elements starting from 0 to 4
var abc = arrayFruits.slice(1,5);
console.log(`Display element in array: ${abc}`);
console.log("-----------------------------------------------------------------");
// Select 3 element
var selectElement = arrayFruits.slice(-3);
console.log(`Log on console: ${selectElement}`);

