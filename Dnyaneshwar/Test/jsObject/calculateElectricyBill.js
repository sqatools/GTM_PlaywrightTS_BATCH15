var BillDetails ={

    Viraj : {unit :121 , bill :0},
    pranali : {unit :200 , bill :0},
    kailas : {unit :300 , bill:0},
    manisha : {unit :350 ,bill:0}

}

for(var customer in BillDetails)
{

    var unit=BillDetails[customer].unit

    if(unit <=100)
    {
        BillDetails[customer].bill=unit*10;
    }
    else if(unit <=200)
    {
        BillDetails[customer].bill=unit*12;
    }
    else if(unit <=250)
    {
        BillDetails[customer].bill=unit*15
    }
    else{
        BillDetails[customer].bill=unit*20
    }

}
console.log(BillDetails)