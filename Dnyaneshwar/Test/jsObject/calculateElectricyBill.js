var BillDetails = {
    virat:{unit:500 ,bill :0},
    Rohit:{unit:212,bill :0},
    Rahul:{unit :321,bill : 0},
    Sachin:{unit : 431 ,bill:0}
}

for(var customer in BillDetails)
{
    var unit = BillDetails[customer].unit;
    
    if(unit <=100)
    {
        BillDetails[customer].bill=unit*10;
    }
    else if(unit >=150 && unit <=200)
    {
        BillDetails[customer].bill=unit*12
    }
    else if(unit >=200 && unit <=300)
    {
        BillDetails[customer].bill=unit*15
    }
    else {
        BillDetails[customer].bill=unit*20
    }
   
}

console.log(BillDetails)