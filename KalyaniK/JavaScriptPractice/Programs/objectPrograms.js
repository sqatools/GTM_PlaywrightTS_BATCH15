// Wrrite a program to get the max value from object values.
var obj={a: 300, b: 400, c: 500 ,d: 778}
var val=Object.values(obj);
var Max=0;
//Variant 1 :Printing only the  MAx value
// for (var v of val)
// {
//   if(v>Max)
//     {
//       Max=v;
//     }
  
// }
// console.log(Max)
//Variant2:Printing both the Key and value pairs of the max value
var key

for(var o in obj)
{ 
  if (obj[o]>Max)
  {
    Max=obj[o];
    key=o;
  }
}
console.log(key,'::',Max)

// Write a rpogram to calculate the total bill for the fruit purchased by customer
var FruitsWithPrice={Apple:50, Banana:30, Mango:60, WaterMelon:100, Litchi:150}
var FuritPurchased={Apple:20, Banana:50, Mango:30,WaterMelon:10, Litchi:25}

// //Write a program to calculate the total electricity bill  as per the number of units consumed
// if total units less that 0r equal to 100 perunit charge is 25 
// if total units>=100 <=300 perunit charge is 50
// if total unit >300 per unit charge is 100
var CustDet={
    Rahul:200:0, Mohan:250:0,ravi:300,Rohan:350,Raghav:450}

for(var un in CustDet)
{
    if(CustDet[un]<=100)
    { 
        bill=CustDet[un]*25
    
    }else
    if(CustDet[un]>100 && CustDet[un]<=300)
    { 
        bill=CustDet[un]*50
    
    }else
    if(CustDet[un]>300)
    { 
        bill=CustDet[un]*100
    
    }

    console.log(un,'Units:',CustDet[un],'Bill Amount is',bill);
}