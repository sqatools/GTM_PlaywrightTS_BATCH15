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

var arr3=[20,30,10,15,25.50,100,75,64]
var max_value =[]
var second_max=[]
for (var num of arr3){
    if (num>max_value) { //  20>0  |30>20
        second_max=max_value  //0
        max_value=num // 20
    } 
    else if(num> second_max  && num<second_max)
        second_max=num
        
}

console.log("second max value :", second_max)