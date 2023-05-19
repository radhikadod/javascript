
function voteEligibility(age){
    // invalid data
    if (age==null && age==undefined) {
        console.log(`You have entered Invalid data --> ${age}`);
    } else {
        // for 0 and negative
        if (age<=0 || age > 120) {
            console.log(`You have entered invalid data --> ${age}`);
        } else {
            // valid data
            if (age>=18) {
                console.log(`Your age is: ${age}--> You are eligible for voting`);
            } else {
                console.log(`Your age is: ${age}--> You are not eligible for voting`);
            }
    
            
        }
        
    }

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);