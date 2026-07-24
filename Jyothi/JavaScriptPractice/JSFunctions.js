//Function with parameter
function addition(num1,num2)
{
    console.log("Addition:",num1+num2)
}
addition(30,40)

//pass by reference

var x=400
var y=700
addition(x,y)

for(var y=5;y<=20;y+=5)
{
addition(x,y)
}



//Function with default parameter

function multiplication(v1,v2=30)
{
    console.log(`multiplication:${v1*v2}`)
}
multiplication(5)
//update default & override
multiplication(5,50)



function Getuserdetails(user)
{
    console.log(user)
    console.log(Object.entries(user))
    for(var[key,value] of Object.entries(user))
    {
        console.log(key,":",value)
    }
}
Getuserdetails({name: "jyo",age:60,email:"jyo@gmail.com"})


//Function with return type

function factorial(num)
{
    var fact=1
    for(var i=num;i>0;i--)
    {
        fact=fact*i
    }
    return fact
}
var output=factorial(5)
console.log("Factorial:",output)




//Sum of all even numbers
var sumeven=(num) =>
{
    var sum=0
    for(var i=0;i<=num;i++)
    {
       if(i%2==0)
        sum=sum+i
   
    }
    return sum
}

var sumtotal=sumeven(10)
    console.log("Sum of even numbers",sumtotal)
    
   //sum of all values are divisiblr by 3 and 5 between 1 to 100
   var sumvalues=(num) =>
{
    var sum=0
    for(var i=0;i<=num;i++)
    {
       if(i%3==0 && i%5==0)
        sum=sum+i
   
    }
    return sum
}

var sumtotal=sumvalues(100)
    console.log("Number is divisible by 3 & 5",sumtotal)
    
//To remove duplicate numbers from string

    var removeDuplicates = (str) => 
        {
           var result = ""

          for (var i = 0; i < str.length; i++) 
            {
              if (!result.includes(str[i])) 
                {
                   result += str[i]
                }
            }

          return result;
        }

var output = removeDuplicates("112233445566778899");
console.log(output)


//Write arrow function create a calculate add ,multiplication,subtraction,division

//Write arrow function given number is prime or not
var isPrime = (num) =>
     {
         var prime = true


         for (var i = 2; i < num; i++) 
            {
               if (num % i == 0) 
                {
                   prime = false
                   break
                }
            }

    if (prime) 
        {
        console.log("Prime number", num)
        } 
    else 
        {
          console.log("Not prime number", num)
        }

         return num
      }
 var primeno=isPrime(13)

//

var s2="We are learrninf=g javaScript"
var vowels=" "
for(var i=0;i<s2.length;i++)
{
    if("aeiou".includes(s2[i]))
    
    {
        vowels=vowels+s2[i]
    }
}
console.log("Vowels:",vowels)