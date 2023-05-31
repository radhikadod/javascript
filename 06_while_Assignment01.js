// 5 to 15 by incrementing 1
console.log(`Numbers from 5 to 15 :`);
i = 5;
while (i<=15) {
    console.log(`${i}`);
    i++;
    
}
console.log("-------------------------------------------------");
// 50 to 40 by decrementing 1
console.log(`Numbers from 50 to 40`);
j = 50;
while (j>=40) {
    
    console.log(`${j}`);
    j = j - 1;
    
}
console.log("-----------------------------------------------------");
// first 15 odd numbers
console.log(`First 15 odd numbers :`);
i = 0;
while (i<=30) {
    if (i%2 == 1) {
        console.log(`${i}`);
    }
    i++;
    
}
console.log("--------------------------------------------------------");
// first 10 even numbers
console.log(`First 10 even numbers :`);
i = 0;
while (i<=18) {
    if (i % 2 == 0) {
        console.log(`${i}`);
    }
    i++;
    
}
console.log("----------------------------------------------------------------");
// print table of 5 ==========> 5,10,15,20
console.log(`Print table of 5 :`);

 i = 1; //initialization
 let count = 5;
while (i<=10) {
    let result  = i * count;  // 1 * 5   2*5
   console.log(`${result}`);
    i++;
}
console.log("------------------------------------------------------------------");
// table of 10====>10,20,30
console.log(`Print table of 10 :`);

i =1;
table = 10;
while (i<=10) {
    let res = i * table;
    console.log(`${res}`);
    i++;
    
}
console.log("----------------------------------------------------------------------");
// reverse order -->100 90 80 70

console.log(`Print table of 10 in reverse order :`);
i = 10;
let rev = 10;
while (i>=1) {    //10 > = 1=true //99
    let result = i * rev; //10*10
    console.log(`${result}`);
    i--;
    
}