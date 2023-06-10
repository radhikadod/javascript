

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("----Employess from wipro company---");//filter()
const empWipro = array_employees.filter( (employee)=>{
    return employee.emp_company=="Wipro";

})
for (const employee of empWipro) {
    console.log(`Employee name : ${employee.emp_name} , Company : ${employee.emp_company}`);
}

console.log("-------Employees from IT OR HR---------");

const empDepartment = array_employees.filter( (employee)=>{
    return employee.emp_dept=="IT" || employee.emp_dept=="HR";
})
// console.log(empDepartment);
for (const emp of empDepartment) {
    console.log(`Employee name :${emp.emp_name} , Company : ${emp.emp_dept}`);
}

console.log("------Employees whose emp id's > 50---------");
const empIdGreaterThan50 = array_employees.filter( (employee)=>{
    return employee.emp_id > 50;
})
// console.log(empIdGreaterThan50);
const empNameOfEmployees = empIdGreaterThan50.map( (employee)=> {
    return employee.emp_name;
})
console.log(empNameOfEmployees);
console.log("----Employees whose name starts with 'A' || 'V' || 'M'");

const employeeNames = array_employees.filter( (employee)=>{
     return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M") 
        }
)
// console.log(employeeNames);
for (const emp of employeeNames) {
    console.log(`Employee name: ${emp.emp_name}`);
}
console.log("-------Average salary of employee for all departments------");
const arrayDept = array_employees.map((employee)=> {
    return employee.emp_salary;
})

// console.log(arrayDept);
const sumOfSal = arrayDept.reduce( (runningTotal,value)=> {
    return runningTotal + value;
})
// console.log(sumOfSal);

const averageOfSalaries =sumOfSal/ arrayDept.length;
console.log(averageOfSalaries);

console.log("----Average salary for IT department------");

const ItDepartmentemp = array_employees.filter( (employee) => {
    return employee.emp_dept=="IT";
    
})

const empSalariesOfItDept = ItDepartmentemp.map( (employee)=>{
    return employee.emp_salary;

})
const sumOfValues = empSalariesOfItDept.reduce( (runningTotal,value)=>{
    return runningTotal + value;
})
// console.log(sumOfValues);
const average =sumOfValues/ItDepartmentemp.length;
console.log(average);