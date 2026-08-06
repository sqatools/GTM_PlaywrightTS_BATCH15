Customerdetails={
    Rahul:200,
    Mohan:250,
    Ravi:300,
    Rohan:350,
    Raghav:450

}
 var totalbill=0
for(var electric in Customerdetails)
   {
    var units=Customerdetails[electric]
    var bill=0
   
    if(units<100)
    {
        bill=units*25
   }
   else if(units>100 && units<=300)

    {
        bill=units*50
    }
    else
        {
          bill=units*100
    }
    console.log("customer Bill:",bill)
    totalbill=totalbill+bill
}
console.log("TotalBill:",totalbill)