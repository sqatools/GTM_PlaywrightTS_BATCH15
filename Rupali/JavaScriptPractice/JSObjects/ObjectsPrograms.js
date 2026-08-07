// find maximum number from object

var objA= {'a':100, 'b':200, 'c':300}
var max = 0;
for(var val in objA){
    if(objA[val]>max){
        max = objA[val]
    }
}
console.log(max)

// write a program to calculate total electricity bill as per the unit consumed by user. 
// per unit charges as below
// if total unit<100 then per unit charges 25
//if total unit>=100 and <=300 then per unit charges 50
//if total unit>300 per unit charges 100
 var cutomerDetails ={ Rahul: 200, Mohan: 250, Ravi: 300, Rohan: 350, Raghav: 450}
 for(var val in cutomerDetails){
    if(cutomerDetails[val]<100){
        console.log(val, cutomerDetails[val], cutomerDetails[val]*25)
    }   
    else if
        (cutomerDetails[val]>=100 && cutomerDetails[val]<=300){
        console.log(val, cutomerDetails[val], cutomerDetails[val]*50)
    }
    else if (cutomerDetails[val]>300){
        console.log(val, cutomerDetails[val], cutomerDetails[val]*100)
    }   
}

