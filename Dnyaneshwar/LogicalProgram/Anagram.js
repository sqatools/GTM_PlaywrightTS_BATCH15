var str1="madam"
var str2="madam"

if(str1.length != str2.length){
    console.log("given string length are not sam eand its not anagram string")
}
else{

    console.log("okay ! chlenght are the same ")

    var a=str1.toLowerCase()
    var b= str2.toLowerCase()

    if(str1.split(" ").sort().join("")==str2.split(" ").sort().join("")){
        console.log("anagram")
    }
    else{
        console.log("not anagram")
    }



    
}