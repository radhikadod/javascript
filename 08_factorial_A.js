

function factorialOfNum(num){
    if ( num ==0){
        console.log(`Factorial of zero ----> 1`);
        // return ;
    }
    if (num == null ||num == undefined || num == NaN) {
        console.log(`Invalid value --> ${num}`);
    } 
    else {
    let factorial = 1;
    for (let index = num; index >= 1; index--) {
        factorial= factorial * index;
        }
    
    return factorial;
    }
}
    
    

   
    // console.log(`Factorial is: ${factorial}`);



let factOf5= factorialOfNum(5);
console.log(`Factorial of 5 ------> ${factOf5}`);
let factOf3= factorialOfNum(3);
console.log(`Factorial of 3 ------> ${factOf3}`);
 factorialOfNum(null);
// console.log(`Factorial of Null---> ${factOfNull}`);
let factOf8 = factorialOfNum(8);
console.log(`Factorial of 8 ----> ${factOf8}`);
 factorialOfNum(undefined);
// console.log(`Factorial of Undefined-----> ${factOfInvalid}`);
let factOf9= factorialOfNum(9);
console.log(`Factorial of 9 -----> ${factOf9}`);
factorialOfNum(0);
// console.log(`Factorial of 0----> ${factOfZero}`);
// factorialOfNum(0);


