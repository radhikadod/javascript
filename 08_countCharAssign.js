function countCharA(word){
    let count = 0;
for (let index = 0; index <= word.length; index++) {
    let char = word.charAt(index);
    if (char == "a" || char == "A") {
        count++;
    }

    }
    

return count;
}

console.log("I AM Learning Javascript,The language of internet"); ;
let countTotalCharOne = countCharA(`"I AM Learning Javascript,The language of internet"`);
console.log(`Total number of character for ['a' || 'A'] in String1 ------> ${countTotalCharOne}`);

console.log("My favorite movie is LAggAn"); ;
let countTotalCharTwo = countCharA(`"My favorite movie is LAggAn"`);
console.log(`Total chracter count for ['a' || 'A'] in String2 ----> ${countTotalCharTwo}`);