// Calculate the electricity bill

customerDetails = { ram:200, rahul:300, ramesh:400, rajesh:500,rohan : 350,Srik : 100 };

customerBillDetails = [];
for (var key in customerDetails) {
    if (customerDetails[key] <= 100) {
        billAmt = customerDetails[key] * 1;
        console.log(key + " : " + customerDetails[key] * 5)
    } else if (customerDetails[key] > 100 && customerDetails[key] <= 200) {
        billAmt =customerDetails[key] * 5;
        console.log(key + " : " +   customerDetails[key] * 7)
    } else if (customerDetails[key] > 200 && customerDetails[key] <= 300) {
        billAmt = customerDetails[key] * 10;
        console.log(key + " : " +   customerDetails[key] * 10)
    }   else if (customerDetails[key] > 300 && customerDetails[key] <= 400) {  
        billAmt = customerDetails[key] * 20;         
console.log(key + " : " +   customerDetails[key] * 20)
}
    else if (customerDetails[key] > 400 && customerDetails[key] <= 500) {
            billAmt = customerDetails[key] * 25;
        console.log(key + " : " +   customerDetails[key] * 25)
    }
    customerBillDetails.push({
        name: key,
        units: customerDetails[key],
        amount: billAmt
    } )
    //   customerBillDetails[name] = key;
    //     customerBillDetails[units] = customerDetails[key];
    //     customerBillDetails[amount] = billAmt;
}
