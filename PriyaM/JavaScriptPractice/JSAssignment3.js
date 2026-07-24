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
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var a = 0
for (var i=0; i<arr.length; i++) {
  a = arr[i]
}

//Count vowels in string
//Print object keys and values

//Create star pattern using nested loop
var rows = 5
for (var i=1; i<=rows; i++) {
     var star = ""
    for (var j=1; j<=i; j++) {
        star += "*"
    }
     console.log(star)
}

