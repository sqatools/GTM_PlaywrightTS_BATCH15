// write program to get values from array which are prime num

var primeValues =[4,6,7,11,13,16,25,29]

for(var num of primeValues){
    var prime =true;
    for(var i=2;i<num;i++){
        if(num%i==0){
            prime =false;
            break;
        }
    }
    if (prime){
        console.log(num,": is a prime number")
    }
}


// write a program to get combination of number whose sum is 10

var array1 =[4,6,7,12,9,3,-2,8,2,1]


// write  a program to print square of even values and cube of odd values

var array2= [4,7,9,3,6,12,15]

for(var num of array2){
    for(var i=0; i<num ;i++){
        if(num%2==0){
            console.log(num, "is even and its square is ", num**2)
            break
        }
        else{
            console.log(num, " is odd number and its cube is ", num**3)
            break
        }
    }
}

