//https://sqatools.in/javascript-loop/
//Print 1 to 10 numbers using for loop

for(var i=0;i<=10;i++){
    console.log(i)
}

//Reverse value with for loop
for(var i=10;i>=0;i--){
    console.log(i)
}

//table of given value using for loop
var num=10
for(var i=1;i<=10;i++)
    {
    console.log(i, "*", num, ":", i*num)
    }

//factorial
var num=1;
for(var i=9;i>0;i--)
{
    num*=i
}
console.log(num)

//apply loop on string
var str1="HELLO JS"
for(var val of str1){
    console.log(val)
}

//apply loop on array
var array1=[5,6,7,8]
for(var val of array1){
    console.log(val)
}
//apply in array
var arr1=["Hello" ,"js"]
for(var val of arr1){
    console.log(val)
}


//Prime number
var num=13
var prime=true
for(var i=2;i<num;i++)
{
    if(num%i==0)
    {
        prime=false
        break
    }
}
if(prime){
    console.log("It is a prime number")
}else{
    console.log("It is not a prime number")
}
//package delivery using nested for loop

for(var i=1;i<=5;i++){
    console.log("Address:i:",i)
    for(var j=1;j<=3;j++)
    {
        console.log("Package:j:",j)
    }
    console.log("----------")
}

//get list of all prime numbers between 1 to 100

for(var num=2;num<=100;num++){
var prime=true
for(var i=2;i<num;i++)
{
    if(num%i==0)
    {
        prime=false
        break
    }
}
if(prime){
    console.log(num)
}
}

//specific number is prime or not
var arr1 = [5,9,10,45,11,100,23]
for(var num of arr1){
var prime=true
for(var i=2;i<num;i++)
{
    if(num%i==0)
    {
        prime=false
        break
    }
}
if(prime){
    console.log(num)
}
}

//while loop
/*while(cond){
    code of block
}*/

var n=0
while(n<=10)
{
    console.log("value of n:", n)
    n += 1
}

//do while(will execute the code atleast once)
var m=1
do{
    console.log("value",m)
    m += 1
}while(m<=10)

    //another example of do while loop

    var db_user = "Admin"
    var db_password = "Password"

    var username = "Admin"
    var password = "Password"
    var ActiveStatus = true
    var num = 3
    do{
        if (db_user == username && db_password == password){
            console.log("Login successful")
        }else{
            console.log("Login fail")
            ActiveStatus=false
        }
        if(ActiveStatus)
        {
            for(var i=1;i<=10;i++)
                console.log(i, "*", num,":",i*num)
        }
        num += 1
        if(num==10){
            break
        }
    }while(ActiveStatus)
    