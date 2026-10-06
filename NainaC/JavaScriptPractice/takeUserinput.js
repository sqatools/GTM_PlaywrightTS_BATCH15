// npm install prompt-sync


//const prompt = require('prompt-sync')() ;
//const name = prompt("enter your value:")
//console.log("name:", name)





const prompt = require('prompt-sync')() ;
const numA = prompt("enter your number:")
var fact=1
for(var i= Number(numA); i> 0;i--){
    fact *=1
}
console.log(fact)
// apply loop on string

var str= "Hello js"
for(var val of str)
{
    console.log(val)
}


var array=[2,7,8,9,4]
for(var val of array)
{
    console.log(val)
}

var B=["hello", "s3"]
for(var val of B){
    console.log(val)
}