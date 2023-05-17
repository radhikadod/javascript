

console.log("------------------------------01--------------------------------");

var greaterNumber = function(num1,num2) {
var result = num1 >= num2 ? (`${num1} is greater`) : (`${num2} is greater`);
console.log("Greatest number :",result);
}

greaterNumber(10,-10);
greaterNumber(800,899);
console.log("------------------------02--------------------------------------");

var isEvenOrOddNum = function(num) {
   var result = num % 2 == 0 ? true : false;
   return result;
  }

 var returnValue = isEvenOrOddNum(29);
var res = (returnValue == true)? `Given number 29 is: Even`: `Given number 29 is: Odd`;
console.log(`${res}`);
 var returnValue = isEvenOrOddNum(44);
 var res = (returnValue == true) ? `Given number 44 is: Even`: `Given number 44 is: Odd`;
 console.log(`${res}`);
 var returnValue = isEvenOrOddNum(0);
 var res = (returnValue == true) ? `Given number 0 is: Even` : `Given number 0 is: Odd`;
 console.log(`${res}`);
 var returnValue = isEvenOrOddNum(101);
 var res = (returnValue == true) ? `Given number 101 is: Even` : `Given number 101 is: Odd`;
 console.log(`${res}`);

 console.log("-------------------------03-------------------------------");
  var wordLength = function(word) {
   var len = word.length;
   var result = (len % 2 == 0)? "Even": "Odd";
   return result;
}
  var returnValue = wordLength("JavaScript");
  console.log(`JavaScript is --> ${returnValue}`);
  var returnValue = wordLength("developer");
  console.log(`developer is --> ${returnValue}`);
  var returnValue = wordLength("Google");
  console.log(`Google is --> ${returnValue}`);