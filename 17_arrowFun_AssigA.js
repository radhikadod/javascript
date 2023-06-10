

console.log(`With no arguments and no return value..`);
let display = () => {
    console.log(`"Good Morning, Today is Monday"`);

}
display();
console.log("-------------------------------------------------------");
console.log(`With arguments and no return value..`);
let show = (num1,num2,num3=1) => {  //num3=1 default value
     multiply = num1 * num2 * num3;
     console.log(`Multiplication is : ${num1} x ${num2} x ${num3} : ${multiply}`);

}
show(5,5,2);
show(10,4);
console.log("----------------------------------------------------------------");
console.log(`With arguments and return value..`);
let add = (num1,num2,num3,num4,num5) => {
    let result = num1 + num2 + num3 + num4 + num5;
    
    return result;

}
let res = add(100,100,200,349,756);
console.log(`Addition is : ${res}`);
let res1 = add("I am", " learning"," ES6", " features"," in depth ");
console.log(`Addition is: ${res1}`);
