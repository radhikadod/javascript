
const sbiBank = {
    bankName: "State Bank of India",
    location: "Mumbai",
    accountNo:100082345,
    ifsc: "SBIN00123",
    interestRate: "8%",
    showDetails: function() {
       console.log(`Bank details is : Bank name: ${this.bankName},Location: ${this.location},Account no: ${this.accountNo},IFSC Code: ${this.ifsc},Interest Rate: ${this.interestRate}`);
    }


}
const  axisBank = {
    bankName: "Axis Bank of India",
    location: "Mumbai",
    accountNo:100084430,
    ifsc: "SBIN00678",
    interestRate: "9%",
    showDetails: function() {
        console.log(`Bank details is : Bank name: ${this.bankName},Location: ${this.location},Account no: ${this.accountNo},IFSC Code: ${this.ifsc},Interest Rate: ${this.interestRate}`);
     }
 


}

const  hdfcBank = {
    bankName:"HDFC Bank",
    location: "Mumbai",
    accountNo:10007655,
    ifsc: "SBIN009077",
    interestRate: "8.99%",
    showDetails: function() {
        console.log(`Bank details is : Bank name: ${this.bankName},Location: ${this.location},Account no: ${this.accountNo},IFSC Code: ${this.ifsc},Interest Rate: ${this.interestRate}`);
     }
 



}
const yesBank = {
    bankName: "Yes Bank",
    location: "Mumbai",
    accountNo:100778805,
    ifsc: "SBIN008457",
    interestRate: "7%",
    showDetails: function() {
        console.log(`Bank details is : Bank name: ${this.bankName},Location: ${this.location},Account no: ${this.accountNo},IFSC Code: ${this.ifsc},Interest Rate: ${this.interestRate}`);
     }

    }
 
    //  Function call----------
    sbiBank.showDetails();
    axisBank.showDetails();
    hdfcBank.showDetails();
    yesBank.showDetails();
    

    
    
    

    

    




