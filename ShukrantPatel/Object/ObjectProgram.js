var CustomersDetails = {
    Rahul: 200,
    Mohan: 250,
    Ravi: 300,
    Rohan: 350,
    Raghav: 450
};

for (var customer in CustomersDetails) {

    var totalUnit = CustomersDetails[customer];
    var bill = 0;

    if (totalUnit <= 100) {
        bill = totalUnit * 25;
    }
    else if (totalUnit <= 300) {
        bill = totalUnit * 50;
    }
    else {
        bill = totalUnit * 100;
    }

    console.log(customer + " : " + bill);
}