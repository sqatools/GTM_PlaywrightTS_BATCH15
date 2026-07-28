var str="i love java programming"

var count =0


for(var ch of str){

    if("aeiou".includes(ch))
    {
        count++
    }
}
console.log(count)