

let professor = {
    name:"G.R.Patil",
    Gender:"Male",
    Country:"India",
    age:60,
    isMarried:true,
    degrees:{
        engineering:'CSC',
        PHD:'Adv Computing',
        MBA:'Finance',
        ME:'Construction Management',
    },
        // education: function() {
        //     let details =`Engineering${this.engineering}, PHD: ${this.PHD}, MBA: ${this.MBA}, ME: ${this.ME}`;
        //     // return details;
        //   }
        
         
    
    // certificates:['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'],
    certificates: {
        degreeArray : 
        ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming']
    },
    

    allDegrees: function() {
        let details = `${this.degrees.engineering},${this.degrees.PHD},${this.degrees.MBA},${this.degrees.ME}`;
        console.log(`4. Teacher degrees are : ${details}`);
        // console.log(`Total degrees are:`,object.keys(this.degrees).length);
    }
};




   
    

console.log(`1. Object with 5 properties :`);
console.log(professor); //1st one
console.log("-------------------------------------------");
console.log(`2. Degree object properties :`);
console.log(professor.degrees);
// console.log("------------------------------------------------");
// console.log(`3.Certificate array elements :`);
// console.log(professor.certificates);
console.log("------------------------------------------");
professor.allDegrees();



console.log("---------------------------------------------");
console.log(`5.Professor total years experience :`);
    professor.totalExperience = "14 years"; //Add new property
    console.log(`Total experience: ${professor.totalExperience}` );
    console.log("------------------------------------------------");
    console.log(`6.Modify any property :`);
    professor.name = "R.R.Deshmukh";
    console.log(`Updated property : ${professor.name}`);
    console.log(professor);
    console.log("----------------------------------------------");
    console.log(`7. Add one new certificate :`);
    console.log(`Before:`,professor.certificates.degreeArray);

    let addElement = professor.certificates.degreeArray.push("Oracle certified");
    console.log(`After:`,professor.certificates.degreeArray);
    
    
    
    
    console.log("-------------------------------------------------");
    console.log(`8. Log the last element :`);
    let lastElement = professor.certificates.degreeArray[professor.certificates.degreeArray.length - 1];
    console.log(`Last element : ${lastElement}`);



    // // ADD one new certificate
    // certificates:['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'];

    // let totalLength = (professor.certificates.length - 1)
    // console.log(`${totalLength}`);
    // let updatedValue = totalLength.push("oracle certified");
    // console.log(`Updated value: ${updatedValue}`)





