var givenString = "  Hey you are doing good, keep it up    ";

function stringHandsOn(){
    console.log("String as it is on console:", givenString);
}
stringHandsOn();
console.log("--------------------------------------------------");
var totalLength = givenString.length;
console.log("Total length of string:", totalLength);
console.log("---------------------------------------------------");

 var totalLengthOfTrim = givenString.trim();
 console.log("After removing leading and trailing extra spaces length is:",totalLengthOfTrim,totalLengthOfTrim.length);
 console.log("----------------------------------------------------");

 var extraSpaceCount = (givenString.length) - (totalLengthOfTrim.length);
 console.log("Total number of extra spaces:", extraSpaceCount);
 console.log("-------------------------------------------------------");

 var firstChar = totalLengthOfTrim.charAt(0);
 var lastChar = totalLengthOfTrim.charAt(totalLengthOfTrim.length-1);
 console.log("First and last character of given string after removing extra space:", firstChar,lastChar);
