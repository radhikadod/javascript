
const arrayNum = [11,3,4,11,4,7,3];
console.log(`Original array : ${arrayNum}`);

const setOfNum = [...new Set(arrayNum)];
console.log(`After removing duplicate from array: ${setOfNum}`);









console.log("-------------------------------------------------");
console.log(`Given string : How are you mate`);
const str = "How are you mate";  //"HoW ArE YoU MatE"
let newChar = "";
const arrayWords = str.split(" ");
for (const element of arrayWords){
    for (let index = 0; index < element.length; index++) {
        let char = ""
        if (index==0 || index == element.length-1) {
            char = element[index].toUpperCase();
        }else {
            char = element[index];
        }
        newChar = newChar + char;
    }
    newChar = newChar + " ";
}
console.log(`Updated string : ${newChar}`);