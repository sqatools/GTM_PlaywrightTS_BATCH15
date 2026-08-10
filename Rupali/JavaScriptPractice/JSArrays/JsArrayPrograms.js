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

// write program to get maximum number from array

var arr = [20,30,100,10,15,27]
var maxVal=0
for(var val of arr){
    if(val>maxVal)
        maxVal=val
}
console.log("maxvalue is", maxVal)



var arr1= [20,30,100,10,15,27]
var maxNum =arr1[0]
for(var i=0; i<arr1.length-1; i++){
    if(arr1[i]>maxNum){
        maxNum =arr1[i];
    }
}
console.log("Max num is: ", maxNum)

// write program to get second maximum number from array
var arr2= [20,30,100,10,15,27]
var maxVal=0
var secMax=0
for(var num of arr2){
    if(num>maxVal){
        secMax=maxVal
        maxVal=num
    }
    else if(num>secMax && num<maxVal){
        secMax=num
    }
}
console.log("Second max num is: ", secMax)
console.log("max value is:", maxVal)


//write program to remove duplicate values from array

var arr = [7,8,2,5,7,5,4,8]
var result =[] 
for (var i = 0; i < arr.length-1; i++) {
    if (!result.includes(arr[i])) {
        result[result.length] = arr[i];
    }
}

console.log(result);




// write a program to get combination of number whose sum is 10

var array1 =[4,6,7,12,9,3,-2,8,2,1]

for(var i=0; i<array1.length-1; i++)
{
    var num = array1[i]
    for(var j=0; j<array1.length-1; j++)
    {
        if(num+array1[j]==10){
            console.log(num, " ", array1[j])
        }
       else{
        continue
       }
    }
}

//other way to get combination of number whose sum is 10

var array1 =[4,6,7,12,9,3,-2,8,2,1]
for(var i=0; i<array1.length-1; i++)
{
    for(var j=i+1; j<array1.length-1; j++)  
    {
        if(array1[i]+array1[j]==10){
            console.log(array1[i], " ", array1[j])
        }
    }
}   