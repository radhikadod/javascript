
const arrayNums = [20,3,4,56,90,400,49] 
console.log(`Given array is : [20,3,4,56,90,400,49] `);
const clonedArray = arrayNums;
console.log(`Cloned array is : [${clonedArray}]`);
const updatedClonedArray = clonedArray.push(55,66);
console.log(`Updated cloned array : [${clonedArray}]`);
console.log("---------------------------------------------------------------------");
// spread operator ...
// console.log(`Given array is : [20,3,4,56,90,400,49] `);
const deepClone =[...arrayNums];
deepClone.push(10,25);
console.log(`Original array with update value 10 and 25 : [${deepClone}]`);
console.log(`Deep cloned array :[${arrayNums}]`);

console.log("-----------------------------------------------------------------------------");
// console.log(`Given array is : [20,3,4,56,90,400,49] `);
const arrayEven = [2,30,14,8];
const result = [...arrayEven,...deepClone];
console.log(`Merged array is : [${result}]`);
console.log("-----------------------------------------------------------------------------");
console.log(`Create object employee_info :`);
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"

    },
    address: {
        locality:{
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", " 1800- 4567 32", "+91- 9096 5678 77"]

}
const res = employee_info;
console.log(res);
console.log("--------------------------------------------------------------------");
 const arr = employee_info.address.locality;
console.log(arr);
const arr1 = employee_info.address.city;
console.log(`City : ${arr1}`);
const arr2 = employee_info.address.country;
console.log(`Country : ${arr2}`);
const arr3 = employee_info.mobiles;
console.log(`Mobile numbers : [${arr3}]`);
console.log("--------------------------------------------------------------------------");
const deepCpoy = JSON.parse(JSON.stringify(employee_info));
console.log(`1. Original salary: ${employee_info.salary.july_month}`);
const clone = employee_info.salary.july_month = "80,0000INR";
console.log(`Updated salary: ${clone}`);

console.log(`2. Original value: ${employee_info.address.country}`);
const clone1 = employee_info.address.country = "United Kingdom";
console.log(`Update value : ${clone1}`);






