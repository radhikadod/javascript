console.log(`----------------TCS Interview Eligibility--------------------------`);

function eligibilityScore(gradScore,hscScore,sscScore,candidateName) {
    if (gradScore>=70 || hscScore>=80 || sscScore >= 90) {
        console.log(`Congrats ${candidateName} you are eligible for TCS interview`);
    } else {
        console.log(`Unfortunately ${candidateName} you are not eligible for interview`);
    }

}

eligibilityScore(80,86,90,"Radhika");

console.log("---------------------------------------------------");

eligibilityScore(70,65,55,"Minal");
console.log("-------------------------------------------------------");
eligibilityScore(60,79,88,"Reesha");
console.log("------------------------------------------------------");