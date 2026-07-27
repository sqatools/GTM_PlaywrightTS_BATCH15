//Loop practice programms

//Reverse a string using loop
let str = "value"
var rev = ""
for (var i=str.length-1; i>=0; i--) {
 //console.log(str[i])
 var rev = rev +str[i]
}
console.log("Reverse of string is :", rev)

//Find largest number in array
let arr = [1, 2,11,12,13,3, 4, 5, 6, 7]
var a = 0
for (var i=0; i<arr.length; i++) {
  if (arr[i]>=a) {
    a = arr[i]
  }
}
console.log("the largest number in array is :", a)

//Count vowels in string
var str = "AEIOU vowels in it"
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]   
var count = 0
for (var i =0; i<str.length; i++) {
    if (vowels.includes(str[i])) {
        console.log(str[i])
        count += 1
    }
}
console.log("the number of vovels im string ", str, "is : ", count)

//Print object keys and values
var student = {name: "test", age: 21, email: "test@test.com", phone: 1234567890}
for (var key in student) {
    console.log(key, ": ", student[key])
}

//Create star pattern using nested loop
var rows = 5
for (var i=1; i<=rows; i++) {
     var star = ""
    for (var j=1; j<=i; j++) {
        star += "*"
    }
     console.log(star)
}

