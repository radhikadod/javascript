var square = function(num1){
    var square1 = num1*num1;
    console.log(`Square of given numbers is: ${square1}`);
}
square(5);
square(6);
square(25);
square(100);
console.log("---------------------------------------------------");

console.log(`Type of square variable: ${typeof square}`);
console.log("---------------------------------------------------");

var rectangle = function(length,width){
 var rectangle1 = length*width;
 console.log(`Area of rectangle plot: ${rectangle1}`);
}
rectangle(499,917);
console.log("----------------------------------------------------------");

var swapValues = function(value1,value2){
 console.log(`Before swap: ${value1} ${value2}`);
 temp = value1;
 value1 = value2;
 value2 = temp;
 console.log(`After swap: ${value1} ${value2}`);
}
swapValues("Virat","Anushka");

swapValues(1000,2000);
console.log("-----------------------------------------------------");


var string ="JS the most popular language of internet";
//  var string1 = string.length;
 console.log(`Total characters in the string: ${string.length}`);


// var string2 = string.charAt(6)
console.log(`Character at index 6: ${string.charAt(6)}`);

// var string3 = string.charAt(11);
console.log(`Character at index 11: ${string.charAt(11)}`);

var string4 = string.charAt(string.length-1);
console.log(`Last character: ${string4}`);

var string5 = string.charAt(0);
console.log(`First character: ${string5}`);

var abc = string.split(" ");
console.log(`Totak number of words of the given string: ${abc.length}`);
square(7);