console.log(" .....Logical Operator....")

var M = 100;
var N = 200;
var O = 300;

// && condition Cond1 && cond2

// false && false =false

console.log(" M > N  && N > O : " , M > N && N > O)  // false

//true && false = False

console.log(" N > M && N > O :",  N > M && N > O) // false

// false and true = false

console.log(" M > N && O > N : " ,M > N && O > N) // false

// True && true = true

console.log(" O > M && N > M : ",  O > M && N > M) // true


console.log("........OR Operator........")

// || condition Cond1 || cond2

// false || false =false    

console.log(" M > N || N > O : " , M > N || N > O) // false 

// true || false  : true

console.log(" M < N ||  O > M : " ,  M < N ||  O > M ) // true

// false || true

console.log("M > N || O > M : " , M > N || O > M) //true

// true || true : true

console.log("M < N || N < O :", M < N || N < O) //  true