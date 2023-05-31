
class Vehicle {
    name
    color
    price
    mileage
    model
    constructor(name,color,price,mileage,model){
        this.name = name;
        this.color = color;
        this.price = price;
        this.mileage = mileage;
        this.model = model;
    }
}
    const bmw = new Vehicle ("BMW","white","32 lakh",12,2006);
    const maruti = new Vehicle ("Maruti","Black","10 lakh",10,2010);
    const jaguar = new Vehicle ("Jaguar","Red","20 lakh",18,2021);
    const tata = new Vehicle ("Tata","Blue","9 lakh",18,2011);
    const swift = new Vehicle ("Swift","Purple","17 lakh",17,2022);

    const arrayOfVehicles = [bmw,maruti,jaguar,tata,swift];

    for (const Vehicle of arrayOfVehicles) {
        console.log(`Details of the vehicle : Name:${Vehicle.name}, Color:${Vehicle.color}, Price:${Vehicle.price}, Mileage:${Vehicle.mileage}, Model:${Vehicle.model}`);
    }console.log("---------------------------------------------------------------------------------------------------------------");


    class College {
        name
        city
        department
        mobile
        constructor(name,city,department,mobile){
            this.name = name;
            this.city = city;
            this.department = department;
            this.mobile = mobile;
        }
    }
    const coep = new College("COEP College","Pune","Engineering",9800800800);
    const nmims = new College("NMIMS College","Mumbai","MBA",8100844500);
    const ycce = new College("YCCE College","Nagpur","Diploma",9677455600);
    const ignou = new College("IGNOU College","Delhi","Engineering",9877677688);



console.log("**********College details*************");
    traverseObject(coep);
    console.log("-------------------------------------");
    traverseObject(nmims);
    console.log("--------------------------------------");
    traverseObject(ycce);
    console.log("-----------------------------------------");
    traverseObject(ignou);
    console.log("------------------------------------------");

    function traverseObject(collegeObject){
        for (const key in collegeObject) {
            if (Object.hasOwnProperty.call(collegeObject, key)) {
                const element = collegeObject[key];
                console.log(`${key}: ${element}`);
                
            }
        }


    }







