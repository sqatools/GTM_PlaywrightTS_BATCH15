var str=["apple", "banana", "apple", "cherry", "banana", "date", "cherry", "fig", "grape", "fig"]


for(var i=0;i<str.length;i++)
{
    for(var j=i+1;j<str.length;j++)
    {
        if(str[i]==str[j])
        {
            console.log(str[i])
        }
    }
}