


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

const arrayEmployee = console.log("----Employees from TCS--------");
const arrayNames = array_employees.filter( (employee)=> {
    return employee.emp_company == "TCS";

})
 for (const emp of arrayNames) {
    console.log(`Company name : ${emp.emp_company} , Employee name : ${emp.emp_name}`);
 }

 console.log("-------Average salary of employees from Wipro-------");

 const wiproEmployees = array_employees.filter( (employee)=> {
    return employee.emp_company == "Wipro";
 })
 let sumSalary = 0;
 wiproEmployees.forEach ( (employee)=> {
    sumSalary = sumSalary + employee.emp_salary;

 })
 const average = sumSalary / wiproEmployees.length;
 console.log(average);
 
 console.log("----Average salary of employee from wipro || infy---");

 const arrayEmp = array_employees.filter( (employee)=> {
    return employee.emp_company == "Wipro" || employee.emp_company == "Infy";
 })
 let sum = 0;
 arrayEmp.forEach ( (employee)=> {
    sum = sum + employee.emp_salary;
 })
 const averageOfSalary = sum / arrayEmp.length;
 console.log(averageOfSalary);
//  console.log(arrayEmp.length);
