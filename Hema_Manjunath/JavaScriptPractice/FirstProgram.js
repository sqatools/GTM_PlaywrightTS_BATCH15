console.log("Hello World!!")


//  Write a Program to count the number of vowels in given  
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
    count++;
    }
    }
    
    return count;
}

// Example usage
let text = "Hello World";
console.log("Number of vowels:", countVowels(text));

// Array functions

var arr1=[5,6,7,12,11,45,17,89]
for(var num of arr1){
    var prime =true
    for(var i=2;i<num;i++){
        if(num%i==0){
            prime=false
            break
        }
    }
    if(prime){
        console.log(num)
    }
}
