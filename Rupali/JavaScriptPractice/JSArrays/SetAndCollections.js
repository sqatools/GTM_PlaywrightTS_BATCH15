var set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(4);
set1.add(6);

console.log(set1);

const set2= new Set(["rohit", "virat", "vaibhav", "abhishek", "surya","Ram"]);
console.log(set2);

set2.add("Rohan");
console.log(set2);

set2.delete("Ram")
console.log(set2);


// set methods
var set3=new Set([1, 3, 5, 7, 9]);
console.log(set3);
console.log(set3.has(3));

// set3.clear()
// console.log(set3);

console.log(set3.size)


// traverse through set

var setValues = new Set(["rohit", "virat", "vaibhav", "abhishek", "surya","Ram"]);

for(var val of setValues){
    console.log(val)
}