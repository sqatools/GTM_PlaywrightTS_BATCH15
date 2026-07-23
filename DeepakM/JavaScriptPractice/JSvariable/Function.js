// write function is Prime number or not

var PrimeNumber= (num)=>{
var prime = true
for(var i=2; i<num; i++) {
    if (num%i == 0) {
        prime=false
        break 
    }
}

if (prime == true) {
    console.log("This is prime number")
} else {
    console.log("This is not an prime number")
}

}
 var result = PrimeNumber(7);


 // remove duplicates from a string of comma-separated values
DuplicateNumber =(str) =>{
    var arr1 = str.split(",")
    var uniquearray =[...new Set(arr1)]
    return uniquearray.join(",")
}
console.log(DuplicateNumber("8,4,5,3,5,6,6,3,3"));


//remove duplicate no from array

const getUniqueArray = (arr) => { 
  return [...new Set(arr)]; 
}

const originalArray =[1,4,5,7,3,7,5,3];

// Save the returned unique array into a new variable
const uniqueResult = getUniqueArray(originalArray);

console.log(uniqueResult); 
