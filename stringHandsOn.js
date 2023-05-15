var givenString = "  Hey you are doing good, keep it up    ";

function stringHandsOn(){
    console.log(`1] String as it is on console: ${givenString}`);
}
stringHandsOn();
console.log("--------------------------------------------------");
var totalLength = givenString.length;
console.log(`2] Total length of string: ${totalLength}`);
console.log("---------------------------------------------------");

 var totalLengthOfTrim = givenString.trim();
 console.log(`3] After removing leading and trailing extra spaces length is: ${totalLengthOfTrim,totalLengthOfTrim.length}`);
 console.log("----------------------------------------------------");

 var extraSpaceCount = (givenString.length) - (totalLengthOfTrim.length);
 console.log(`4] Total number of extra spaces: ${extraSpaceCount}`);
 console.log("-------------------------------------------------------");

 var firstChar = totalLengthOfTrim.charAt(0);
 var lastChar = totalLengthOfTrim.charAt(totalLengthOfTrim.length-1);
 console.log(`5] First and last character of given string after removing extra space: ${firstChar} ${lastChar}`);
 console.log("---------------------------------------------------------------");

var splitString = totalLengthOfTrim.split(" ");
console.log(`6] Total no. of words in the string: ${splitString.length}`);
console.log("----------------------------------------------------");

console.log(`7] Print the index of good from string: ${totalLengthOfTrim.indexOf("good")}`);
console.log("----------------------------------------------------------");

console.log(`8 a] Substring starting from index 22 by using substring : ${totalLengthOfTrim.substring(22)}`);
console.log(`8 b] Substring starting from index 22 by using substring: ${totalLengthOfTrim.slice(22)}`);
console.log("--------------------------------------------------------------");

console.log(`9] Checked is string ends with 'up': ${totalLengthOfTrim.endsWith("up")}`);
console.log("---------------------------------------------------------");

console.log(`10] Checked is string strat with 'Hey': ${totalLengthOfTrim.startsWith("Hey")}`);
console.log("---------------------------------------------------------------------");





