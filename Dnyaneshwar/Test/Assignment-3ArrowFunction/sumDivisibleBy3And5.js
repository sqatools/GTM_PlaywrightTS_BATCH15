var sumDivisibleBy3And5 =() =>

    {

       var sum =0
       
       
       for(var i=0;i<=100;i++){

        if(i % 3 ===0 && i % 5===0){

            sum +=i
        }
       }
       return sum
    }

    console.log("sum of %5 and %3 till 100 is :",sumDivisibleBy3And5())