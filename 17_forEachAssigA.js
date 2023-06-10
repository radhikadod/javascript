

const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log("-----Log array element with it's index-------");
arrayNumbers.forEach((element,index) => {
    console.log(`Index : ${index} , Element : ${element}`);

})

console.log("----------Positive numbers and log on console--------------");

arrayNumbers.forEach( (element)=> {
    if (element>0) {
        console.log(element);
        
    }

})

console.log("----------Negative numbers -------------");

const arrayNegativeNums =[];    //new array
arrayNumbers.forEach( (element)=> {
    if (element<0) {
        arrayNegativeNums.push(element);
    }

});
arrayNegativeNums.forEach(element => console.log(element));

console.log("-------------Even numbers----------------------");

arrayNumbers.forEach( (element) => {
    if (element%2==0) {
        console.log(element);
        
    }
})
console.log("-----------Sum of all elements-------------------");
sum = 0;
arrayNumbers.forEach( (element)=> {
sum = sum + element;

})
console.log(sum);

console.log("------------Even indexed array value------------------");

arrayNumbers.forEach( (element,index)=> {
    if (index % 2==0) {
        console.log(element);
        
    }
})