
//String Practice questions

//Get the First and Last 2 Characters
var Str = "Javascript"
var n = Str.length
var NewStr = ""
for (var i=0; i<n; i++) {
        NewStr = Str[0] + Str[1] + Str[n-2] + Str[n-1]
}
console.log(`The First and Last 2 Characters of String ${Str} is :`, NewStr)

//Find the Length of the Longest String in an Array
var arr = ["Java", "Programming", "Code"]
var n = 0
var largest = ""
console.log(arr)
for (var i=0; i<arr.length; i++) {

    if(n <= arr[i].length) {
        n = arr[i].length
        largest = arr[i]
    }

}
console.log("The Length of the Longest String in Array is :", largest)

// Repeat the Last Two Characters Four Times
var Str = "Coding"
var n = Str.length
var NewStr = ""
for (var i=0; i<n; i++) {
        NewStr = Str[n-2] + Str[n-1]
}
console.log(`Repeat the Last Two Characters Four Times for String ${Str} :`, NewStr.repeat(4))



// Reverse a String if Its Length is a Multiple of 4
var str = "Code"
var n = str.length
var rev = ""
if (n%4 == 0) {

    for (var i=n-1; i>=0; i--) {
    rev = rev + str[i]
    }
}
console.log(`Reverse of ${str} is a ${rev}`)

// Count Occurrences of a Substring



// Check Whether a Character is a Vowel or Consonant

var s2 = "ConsonEnTS"
var count_v = 0
var count_c = 0
var vowels = "aeiouAEIOU"
for(var char of s2) {
    if(vowels.includes(char)) {
        count_v += 1
        console.log(`${char} is a vowel at :`, s2.indexOf(char))
    } else {
        count_c += 1
        console.log(`${char} is a consonent at :`, s2.indexOf(char))
    }
}
console.log("Total vowels is :", count_v)
console.log("Total consonents is :", count_c)


// Find the Longest and Shortest Word
var arr = ["Java", "Programming", "Code", "all"]
var n = 0
var largest = ""
var smallest = ""
console.log(arr)
for (var i=0; i<arr.length; i++) {

    if(n <= arr[i].length) {
        n = arr[i].length
        largest = arr[i]
    }

}
console.log("The Length of the Longest String in Array is :", largest)
var ll = largest.length

for (var i=0; i<arr.length; i++) {

    if(ll >= arr[i].length) {
        ll = arr[i].length
        smallest = arr[i]
    }

}
console.log("The Length of the smallest String in Array is :", smallest)

// Find the Most Frequently Repeated Character



// Calculate String Length Without Using length Property
var str = "JavaScript"
var count =0
for (var char in str) {
    count += 1
}
console.log("String Length Without Using length Property is :", count)


// Replace Every Second Occurrence of a Character with '$'




// Swap the First and Last Character
var Str = "Javascript"
var n = Str.length
var NewStr = ""
var output = ""
for (var i=1; i<=n-2; i++) {
        NewStr += Str[i] 
    }
output = Str[n-1] + NewStr + Str[0] 

console.log("ouput :", output)


// Swap the First and Last Character of Every Word



// Count Vowels in Each Word



// Repeat Vowels Three Times and Consonants Twice



// Check Whether a String is a Palindrome

var str = "madam"
var n = str.length
var rev =""
for (var i=n-1; i>=0; i--) {
    rev = rev + str[i]
}
    if (str === rev) {
        console.log(`${str} is a palindrome`)
    } else {
        console.log(`${str} is not a palindrome`)
    }


// Reverse the Entire String
var str = "JavaScript"
var n = str.length
var rev =""
for (var i=n-1; i>=0; i--) {
    rev = rev + str[i]
}
console.log(`Reverse of ${str} is :`, rev)

// Calculate String Length
var str = "Programming"
var count =0
for (var char in str) {
    count += 1
}
console.log("String Length Without Using length Property is :", count)


// Count Frequency of Every Character


// Combine Two Strings


// Print Characters at Even Positions


// Check Whether the String Contains Numbers


// Count Total Vowels


// Count Total Consonants



// Print Characters at Odd Positions



// Remove Duplicate Characters