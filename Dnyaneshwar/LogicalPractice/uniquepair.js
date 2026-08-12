var str="abc"

for(var i=0;i<str.length;i++ )
{

    for(var j=0;j<str.length;j++)
    {

        for(var k=0;k<str.length;k++)
        {
            console.log(str.charAt(i)+str.charAt(j)+str.charAt(k))
        }
    }
}