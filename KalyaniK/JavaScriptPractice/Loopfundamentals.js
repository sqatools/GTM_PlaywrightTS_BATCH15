//get primenumbers 1 to 100
prime=true
for(var num=1;num<=100;num++)
{
     for (var i=2;i<num;i++)
     {
        if(num%i==0)
         { 
            prime=false
            break
         }
     }
   if(prime){
    console.log(num + " is a prime number")
   }  
}