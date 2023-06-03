// 0  1   1   2   3   5   8   13   21
// n1 = 0;
// n2 = 1;
// next = n1 + n2;
// n2 = next;
// n1 = n2;

var count = 11;
var array = [0,1];
for (let index = 2; index < count; index ++ ) {
    
    array[index] = array[index - 1] + array[index - 2];
}

console.log("");
console.log(`Fibonacci series is : ${array}`);