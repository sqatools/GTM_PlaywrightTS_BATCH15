//Loop practice programms

//Reverse a string using loop
let str = "value"
var rev = ""
for (var i = str.length - 1; i >= 0; i--) {
    //console.log(str[i])
    var rev = rev + str[i]
}
console.log("Reverse of string is :", rev)

//Find largest number in array
let arr = [1, 2, 11, 12, 13, 3, 4, 5, 6, 7]
var a = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a) {
        a = arr[i]
    }
}
console.log("the largest number in array is :", a)

//Count vowels in string
var str = "AEIOU vowels in it"
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
var count = 0
for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        console.log(str[i])
        count += 1
    }
}
console.log("the number of vovels im string ", str, "is : ", count)

//Print object keys and values
var student = { name: "test", age: 21, email: "test@test.com", phone: 1234567890 }
for (var key in student) {
    console.log(key, ": ", student[key])
}

//Create star pattern using nested loop
var rows = 5
for (var i = 1; i <= rows; i++) {
    var star = ""
    for (var j = 1; j <= i; j++) {
        star += "*"
    }
    console.log(star)
}

var str = "Rohit Virat Vaibhav"
var arr = []
var result = ""
arr = str.split(" ")
console.log(arr)

for (var i of arr) {
    result += (i[0] + i) + " "
}
console.log("Result is :", result)


//*******************************

var str = "Rohit Virat Vaibhav"
var arr = []
var result = ""
arr = str.split(" ")
console.log(arr)

for (var i of arr) {
    result += (i[0] + i[i.length - 1]) + " "
}
console.log("Result is :", result)

//Remove duplicates from string
var str = "Rohit Virat Seth Vaibhav Rohit Virat Vaibhav Vaibhav"
var arr = []
var result = []
arr = str.split(" ")

for (var i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {   // only add if not already in result
        continue
    } else {
        result = result + arr[i] + " "
    }
}

console.log(result)


//Write a program to get value from array which are prime num
var primevalues = [4, 6, 7, 11, 13, 16, 25, 29]
var result = []

for (var num of primevalues) {

    for (var i = 2; i < num; i++) {
        var prime = true
        if (num % i == 0) {
            prime = false
            break
        }
        if (prime === true) {
            result.push(num)
        }
    }

    console.log(result)

//Write a program to get a combination of 2 values whose sum is 10
    var arr = [4, 6, 7, 12, 9, 3, -2, 0, 2, 1]
    var result = []
    for (var num of arr) {
       
    }




//Write a program to print square of even values and cube of odd values
    var array3 = [4, 7, 9, 3, 6, 12, 15]
    var result = []
    for (var num of array3) {

        if (num % 2 == 0) {
            result.push(num**2)
        } else {
            result.push(num**3)
        }
    }
    console.log(result)


    //Write a program to remove duplicate value
var array4 = [7, 8, 2, 5, 7, 5, 4, 0, 7, 2]
    var newarr = []
    for (var num of array4) {
        if (newarr.includes(num)) {
            continue
        } else {
            newarr.push(num)
        }
    }
    }
    console.log(newarr)
