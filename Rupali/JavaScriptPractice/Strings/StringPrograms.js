var s1 = "We are learning Javascript";

count =0;

for(var val of s1){
    if("aeiou".includes(val))
        count ++;
}

console.log (count)