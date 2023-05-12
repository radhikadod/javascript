console.log("----------------01-------------");
function favouriteColour(){
    console.log("display first colour");
}
console.log("My favourite colour is Black");


function secondColour(){
    console.log("display second colour");
}
console.log("My second most favourite colour is Red");


console.log("---------------02--------------");

function personalDetails(firstName,lastName,collegeName) {
    console.log("My personal details :");
    console.log("My firstname is:", firstName);
    console.log("My lastname is:", lastName);
    console.log("My college name :", collegeName);
} 

personalDetails("Radhika","Dod", "PRMIT&R");//function call

console.log("--------------03-----------------------");

function swapValuesDude(player,actress){
    console.log("Before swap:", player, actress);
    var temp = player;
    player = actress;
    actress = temp;
    console.log("After swap:" , player, actress);

}
swapValuesDude("virat","anushka"); 
console.log(".......................................");

function swapValuesDude(valueOne,valueTwo){
    console.log("Before swap:", valueOne, valueTwo );
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("After swap:" , valueOne, valueTwo);
}
swapValuesDude(1000,2000);

console.log("------------------ 04----------------------");
function addThreeValues(a,b,c){
    result = a + b + c;
    console.log("Addition is:", result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello"," Good"," Morning")
console.log("------------------------------------------------");