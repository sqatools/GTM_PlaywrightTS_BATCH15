var n1 = 20

if(n1%2 ==0)
{
    console.log("even : " , n1)


}

else{
    console.log(" odd : " ,n1)
}

var age = 20 

if(age>=18)
{
    console.log("eligible for vote")
}   
else
{
    console.log("not eligible for vote")
}

let a = 28 ;

if (a%7==0 && a%11==0)
{
    console.log("divisible by 7 and 11",a)
}
else
{
    console.log("not divisible by 7 and 11",a)
}

let marks = 80;

if(marks <35 ){

console.log("fail")
}
else if(marks>=35 && marks<50)
{
console.log("grade C")
}
else if(marks>=50 && marks<60)
{
    console.log("grade C")
}
else if(marks>=60 && marks<80)
{
    console.log("grade B")
}
else if (marks>=80 && marks<100)
{
    console.log("grade A")
}   
else
{
    console.log("invalid marks")
}


console.log("####### Nested IF condition ######")

var round1="pass";
var round2="pass";
var round3="pass";

if(round1=="pass")
{
    if(round2=="pass")
        console.log("eligible for round 3")
}
else
{
    console.log("not eligible for round 3")
}