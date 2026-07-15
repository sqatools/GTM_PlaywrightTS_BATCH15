/*
if cond1 {
    block
}

*/
var a=6
if (a%2 == 0) {
    console.log("Even number:",a)
    } else{
        console.log("Odd number:",a)
    }


    //Q1.Write a if condition to check person is eligible for voting or not. (age>=18)

    var age=19
    if(age >= 18){
        console.log("This person is eligible to vote:",age)
    }else{
        console.log("This person is not eligible to vote",age)
    }

    //Q2: to check given number is divisible by 7 and 11

    var num=77
    if(num % 7==0 && num % 11==0){
        console.log("It is divisble by 7 and 11:",num)
    }else{
        console.log("It is not divisible by 7 and 11:",num)
    }

    //Q3:if else if program to check the student grade as per marks received
    var total=300
    if(total >= 400){
        console.log("A Grade")
    }else if(total>=300){
        console.log("B Grade")
    }else if (total>=250){
        console.log("C Grade")
    }else{
        console.log("fail")
    }