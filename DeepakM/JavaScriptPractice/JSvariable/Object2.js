//write a program to calculate total amount of bill asper consumed electricity
//total unit is >100: --charge is 25 rupee
//total unit is >=100 and <=300 : --per unit charge is 50 rupee
//if unit is >300 then unit charge is 100 rupee

var customerDetails ={
    Rahul:200,
    Raghav:250,
    Mohan : 300,
    Ravi : 350

}
var Totalbill =0;
for(var unit in customerDetails){
    if(customerDetails[unit]<100){
        Totalbill= Totalbill+customerDetails[unit]*25
        console.log(Totalbill)

    }else if(customerDetails[unit]>=100 && customerDetails[unit]<=300)
        {
        Totalbill= Totalbill+customerDetails[unit]*50
        console.log(Totalbill)

    }else if (customerDetails[unit]>=300){
        Totalbill= Totalbill+customerDetails[unit]*100
        console.log(Totalbill)
    }
}
