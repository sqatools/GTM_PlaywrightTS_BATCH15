//write a arrow program to sum of all even numbers from 1 to 30
/*const sumOfEvens = () => {
  let sum = 0;
  for (let i = 2; i <= 30; i += 2) {
    sum += i;
  }
  return sum;
};
*/

/*var result = (sum) => {
var addition = 0;
for(var i=1; i<=30; i++)
{
addition +=i;
}
return addition
}
var sumresult = result()
console.log("sum of values", sumresult)
*/

var result = (sum) => {
var addition = 0
for(i=1; i<=100; i++)
{
if(i%3===0 && i%5===0)
{
addition +=i;
}
}

return addition;
}

console.log("sum of values",result());


