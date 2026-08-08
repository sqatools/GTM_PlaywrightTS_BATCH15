// write aprogram to find out max value from array


var arr1 =[20, 30, 10,5, 15, 18,40,25,22]
var maxvalue=0
for (var value of arr1)
   // console.log(value)
    {
      if (value > maxvalue){
        maxvalue =value
      }
      else
        {
         continue
        }
    }

console.log("max value in arr1 :", maxvalue )

console.log("###########################################")
// Program to find the maximum value using length

var arr1 = [20, 30, 10, 5, 15, 18, 40, 25, 22];

var maxValue = arr1[0];

for (var i = 1; i < arr1.length; i++) {
    if (arr1[i] > maxValue) {
        maxValue = arr1[i];
    }
}

console.log("Maximum value in the array:", maxValue);


console.log("###########################################")

// write  a program   to print all the postive onside and negative otherside

var arr2=[9,2,-4,-5,6,7,28,-3,-8,40,35.-12]
var output=[]
for (var val of arr2)
{
    if( val >0)
    {
        output.push(val)
    }
    else{
        output.unshift(val) 
    }
}
console.log(output)


// write a program to find out the second max value from array

var arr3=[20,30,10,15,25,50,100,75,64]
var max_value =0
var second_max=0
for (var num of arr3){
    if (num>max_value) { //  20>0  |30>20 -true| 10>30-false
        second_max=max_value  //0 | 20
        max_value=num // 20     |30
    } 
    else if(num> second_max  && num<max_value)  //10> 
        second_max=num    //30
        
}

console.log("second max value :", second_max)

// write a program to get the values from array which are prime numbers

var arr4 = [2, 3, 12, 17, 18, 19, 21, 23, 27, 30];

for (var num of arr4) {
    var prime = true;

    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log("This is prime number:", num);
    }
}

//