// a,e,i,o,u == A E I O U

var word = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
 var char = word.charAt(index);
 if (char=='a' || char=='e' || char=='i'|| char=='o'|| char=='u'|| 
 char=='A'|| char=='E' || char=='I'|| char=='O'|| char=='U') {
    console.log(`Vowels is: ${char}`);
    count++;
    }
}
console.log(`Count of total vowels: ${count}`);
 console.log("-------------------------------------------------------------");

 function string(n) {
    var sum=0;
    for (let index = 1; index <= 5; index++) {
        var cube=index *index* index;
        console.log(`Cube is : ${cube}`);
        sum= sum + cube;
    }
    console.log(`Sum of cube: ${sum}`);
    // return count;
 }
string();     
 
//  console.log(`Addition of cubes : ${result}`);
   

    
console.log("--------------------------------------------------------------------------");

function oddPositionedChars(gstring){

    let output='';
   for(index=0;index<gstring.length;index++){
  if(index%2!==0 && gstring[index]!==' ')
  {
     output+=gstring[index];
      
  }
  
   }
   console.log(`Odd positioned character of above string:-> ${output}`);
}
var str1="Hard work always pays back"
var str2="Soon i will be Angular IT champ"
console.log(`Given String is:-> "${str1}"`);
oddPositionedChars("Hard work always pays back");
console.log(`---------------------------------------------------------------------------`);
console.log(`Given String is:-> "${str2}"`);
oddPositionedChars("Soon i will be Angular IT champ")