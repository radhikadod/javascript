console.log("--------------TCS Interview Eligibility-----------------------");

var stringName = function(gradScore,hscScore,sscScore,candidateName) {
 var result = (gradScore >= 70 || hscScore >= 80 || sscScore > 90) ? `Congrats ${candidateName} you are eligible for TCS interview` : `${candidateName} Unfortunately you are not eligible for interview `;
console.log(`${result}`);
}

stringName (80,86,90,"Radhika");

console.log("-------------------------------------------------------------");
stringName (70,65,55,"Minal");

console.log("--------------------------------------------------------------");
stringName (60,79,88,"Reesha");

console.log("----------------------------------------------------------------");