var str="javascriptprogramming"

var result=""

for(var i=0;i<str.length;i++){

    if(i===0){
        result +=str[str.length-1]
    }
    else if(i== str.length-1)
    {
        result += str[0]
    }
    else{
        result += str[i]
    }
}
console.log(result)