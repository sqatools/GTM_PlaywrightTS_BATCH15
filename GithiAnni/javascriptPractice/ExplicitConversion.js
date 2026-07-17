Number("123");    // 123
Number("abc");    // NaN
Number(true);     // 1
Number(false);    // 0
parseInt("10.5");   // 10
parseFloat("10.5"); // 10.5
String(123);      // "123"
String(true);     // "true"

let num = 100;
num.toString();   // "100"
Boolean(1);        // true
Boolean(0);        // false
Boolean("");       // false
Boolean("Hello");  // true
Boolean(null);     // false
Boolean(undefined);// false

//loose equality
console.log("5" == 5); // true

//strict equality
console.log("5" === 5); // false
