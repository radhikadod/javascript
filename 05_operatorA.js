function squareofWordLength(str){
    var lengthOfWord = str.length;
    console.log(`Total length of words: ${lengthOfWord}`);
    var squareOfWord = lengthOfWord * lengthOfWord;
    console.log(`Length of square: ${squareOfWord}`);
    
}
squareofWordLength("Javascript");
squareofWordLength("Google Chrome");
squareofWordLength("Developer Smart");
console.log("-----------------------------------------");



function javaScript(){
     var str = "I am Angular Developer";
     console.log(`Given string is: ${str}`);
     var strLength = str.length;
     console.log(`Length of string: ${strLength}`);
     var strSplit = str.split(" ");
     console.log(`No. of words split are: ${strSplit}`);
      var strLengthOfWords = strSplit.length;
      console.log(`No.of words are: ${strLengthOfWords}`);
      var result = strLength / strLengthOfWords;
      console.log(`Division of string length with words: ${result}`);
      var resultMultiply = strLength * strLengthOfWords;
      console.log(`Multiplication of string length with words: ${resultMultiply}`);

}
javaScript();