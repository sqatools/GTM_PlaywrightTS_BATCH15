//Q2.Write a program to shift all positive left side and negative at right side.
var arr3= [-3,16,18,-2, 27,-12, 45, -78]
var output=[]

//Q3.Program to find out the second max Value.
var array1=[30,50,60,2,55,4,6,200]
var maxVal=0
var secmax=0
for(var num of array1){//30,50
    if(num> maxVal){//30 > 0 |50 > 30
        secMax=maxVal//0,30,50
        maxVal=num //30,50,60
        }
        else if(num> secMax && num <maxVal){
            secMax= num
        }
    }
console.log("Maxvalue:", maxVal)
console.log("second Max Value:",secMax)

//Q4. Write a Program to get value from array which are prime number
var primeValues=[4,6,7,11,13,16,25,29]
var result=[];
for(var i=0;i<primeValues.length;i++)
{
    var num=primeValues[i];
if(num>1){
    var isPrime=true;
    for(var j=2;j<num;j++){
        if(num%j==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        result.push(num);
    }
    }
}console.log(result);

//Q5. Write a program to get combination of two values whos sum is 10
var arra2=[4,6,7,12,9,3,-2,8,2,1]
for (var i=0;i<arra2.length;i++){
    for(var j=i+1;j<arra2.length;j++){
        if(arra2[i]+arra2[j]==10)
        {
            console.log(arra2[i], arra2[j]);
        }
    }
}

//Q6. Write a Program to print square of even values and cube of off values.
var array3=[4,7,9,3,6,12,15];
for (var i=0;i<array3.length;i++){
    var num=array3[i];
    if(num%2==0){
        console.log(num+ "squared=",num*num);
    }else{
        console.log(num+ "cubed=", num*num*num);
    }
}
//Q7. Write a program to remove duplicate values.
var array4=[7,8,2,7,5,4,8]
var array4 = [7, 8, 2, 7, 5, 4, 8];
var result = [];

for (var i = 0; i < array4.length; i++) {
  // If the number is not already in the result array, add it
  if (!result.includes(array4[i])) {
    result.push(array4[i]);
  }
}

console.log(result);