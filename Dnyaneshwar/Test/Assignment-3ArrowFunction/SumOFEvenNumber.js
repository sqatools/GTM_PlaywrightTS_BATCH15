var sumEven =(start,end) => {

    var sum =0

    for(var i=start;i<=end;i++)
    {
        if(i %2==0){
       sum +=i
        }
    }
    return sum
}
var result=sumEven(1,37)
console.log(result)