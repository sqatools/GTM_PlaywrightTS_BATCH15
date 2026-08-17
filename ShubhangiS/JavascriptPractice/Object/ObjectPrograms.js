// write a program to calculate the total eletricity bill as number of units consumed for each customer.
// If totalunit <= 100 : per unit charge is 25 rupee.
// If totalunit >=100 and <=300 : per unit charge is 50 rupee
// if totalunit >300 : per unit is 100 rupee


var CustomersDetails = {
    Rahul: 200,
    Mohan : 250,
    Ravi: 300,
    Rohan : 350,
    Raghav: 450
}

for (var customer in CustomersDetails) {

    var customerName = customer
    var totalUnits = CustomersDetails[customer]
    var perUnitCharge = 0

    if (totalUnits <= 100) {
        perUnitCharge = 25
    }
    else if (totalUnits > 100 && totalUnits <= 300) {
        perUnitCharge = 50
    }
    else {
        perUnitCharge = 100
    }

    var totalBill = totalUnits * perUnitCharge
    console.log(customerName, totalUnits, perUnitCharge, totalBill)
}


