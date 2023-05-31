

const sbiBank = {
    bankName: "State Bank of India",
    accountNo:100082345,
    ifsc: "SBIN00123",
    interestRate: "6.12",
}
// console.log(sbiBank);
console.table(sbiBank);
console.log("----------------------------------------------------------");
const bankLocation = {
    street: "Shankar Nagar Road",
    city: "Pune",
    pin:400112,
}
// console.log(bankLocation);
console.table(bankLocation);
console.log("--------------------------------------------------------------");


Object.assign(sbiBank,bankLocation);
console.table(sbiBank);
console.log("---------------------------------------------------------------");

const rateOfInterest = {
    homeLoanInterest:"7%",
    personalLoanInterest:"9%",
    dueInterest:"11%",

}
console.table(rateOfInterest);
console.log("------------------------------------------------------------------");
const newObject = {
    
}
Object.assign(newObject,sbiBank,bankLocation,rateOfInterest);
console.table(newObject);
// console.log("---------------------------------------------------------------------");
console.log("******Traversing the Object******");
for (const key in newObject) {
    if (Object.hasOwnProperty.call(newObject, key)) {
        const value = newObject[key];
        console.log(`${key}: ${value}`);
        
    }
}