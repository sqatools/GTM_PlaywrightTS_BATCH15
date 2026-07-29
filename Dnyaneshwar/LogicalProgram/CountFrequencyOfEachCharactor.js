
var str="dnyaneshwar"

for(var i=0;i<str.length;i++)
{
    var count =0
    if(str.indexOf(str[i])==i){

        for(var j=0;j<str.length;j++)
        {
            if(str[i]==str[j]){
                count++

            }
        }
 console.log(str[i] + " = " + count);    }
}