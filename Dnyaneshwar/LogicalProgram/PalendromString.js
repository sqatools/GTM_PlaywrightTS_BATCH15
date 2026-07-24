var str="madam"
var rev =""

for(var i = str.length-1;i>=0;i--){

    rev = rev+str[i]
}


console.log(rev)

if(str == rev){
    console.log("given string is pallendrom")
}
else{
    console.log("given string is not pallendrom")
}