
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
var str = "bananana"
var sub = "an"
console.log(str.split("an"))
var count =  str.split(sub).length - 1
  console.log(count)


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
var Input= "mpromgrammingppm"
var MFchar = ""
var MCOunt = 0
var output = {}
for(var char of Input) {
    if (Object.hasOwn(output, char)) {
        output[char] += 1
        if (output[char] >= MCOunt) {
            MCOunt = output[char]
            MFchar = char
        }
    } else {
        output[char] = 1
    }
    console.log("Max frequency character :", MFchar, MCOunt)
}
console.log(output)
console.log("Max frequency character :", MFchar, MCOunt)


// Calculate String Length Without Using length Property
var str = "JavaScript"
var count =0
for (var char in str) {
    count += 1
}
console.log("String Length Without Using length Property is :", count)


// Replace Every Second Occurrence of a Character with '$'
var str = "Programming"
var newStr = ""
for(var char of str) {
    if(newStr.includes(char)) { 
        newStr = newStr + "$"

    } else {
        newStr = newStr + char
    }
}
console.log(`After replacing Every Second Occurrence of a Character with $ in string ${str} :`, newStr)


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
var str = "Online Learning Classes" 
var arr = [] 
var result = []
var s1 = ""
arr = str.split(" ")

for (var i of arr) {
    s1 = ""
    for (var j=1; j<i.length-1; j++) {
        var s1 = s1 + i[j]
    }
    result += (i[i.length-1] + s1 + i[0]) +" "

    }

console.log("Result is :",result)



// Count Vowels in Each Word
var str = "We are learning JavaScript" 
var arr = [] 
arr = str.split(" ")

var count_v = 0
var vowels = "aeiouAEIOU"
for(var char of arr) { 
     count_v = 0
    for (var i=0; i<arr.length; i++) {

    if(vowels.includes(char[i])) {
        count_v += 1
     }
    }
    console.log(`Total vowels in ${char} is :`, count_v)
}


// Repeat Vowels Three Times and Consonants Twice
var s2 = "Code"
var result = ""
var vowels = "aeiouAEIOU"
for(var char of s2) {
    if(vowels.includes(char)) {
        result = result + char.repeat(3)
    } else {
        result += char.repeat(2)
    }
}
console.log("Result is :", result)


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
var count = 0
for (var char in str) {
    count += 1
}
console.log("String Length Without Using length Property is :", count)


// Count Frequency of Every Character
// var str = "progggramming" 
// var count = 0
// var newStr = ""
// for(var char of str) {  

//     if(newStr.includes(char)) {
//         count += 1
//      } else {
//         count = 1
//      }
//      newStr = newStr + char
//     console.log(`Frequency of ${char} is :`, count)
//     }

// Combine Two Strings
var str1 = "Java"
var str2 = "Script"
const CombineStrings = (s1, s2) => {
    return s1 + s2
}
console.log(CombineStrings(str1, str2))

// Print Characters at Even Positions
var str = "JavaScript"
var even_str = ""
for (var i=0; i<str.length; i++) {
    
        if(i%2 == 0) {
            even_str += str[i]
        }

}
console.log(`Characters at Even Positions of ${str} is :`, even_str)


// Check Whether the String Contains Numbers
var str = "code123"
var num_str = "0123456789"
var count = 0
for (var char of str) {
    if(num_str.includes(char)) {
        count++
        console.log("number at ",str.indexOf(char))
    }
}
console.log("total numbers in string is :", count)


// Count Total Vowels
var s2 = "ConsonEnTS"
var count_v = 0
var vowels = "aeiouAEIOU"
for(var char of s2) {
    if(vowels.includes(char)) {
        count_v += 1
        console.log(`${char} is a vowel at :`, s2.indexOf(char))
    }
}
console.log("Total vowels is :", count_v)



// Count Total Consonants
var s2 = "ConsonEnTS"
var count_c = 0
var vowels = "aeiouAEIOU"
for(var char of s2) {
    if(vowels.includes(char)) { 
        continue
    } else {
        count_c += 1
        console.log(`${char} is a consonent at :`, s2.indexOf(char))
    }
}
console.log("Total consonents is :", count_c)


// Print Characters at Odd Positions
var str = "JavaScript"
var odd_str = ""
for (var i=0; i<str.length; i++) {
    
        if(i%2 != 0) {
            odd_str += str[i]
        }

}
console.log(`Characters at Even Positions of ${str} is :`, odd_str)



// Remove Duplicate Characters
var str = "hello" 
var count = 0
var newStr = ""
for(var char of str) {  

    if(newStr.includes(char)) {
        continue
     } else {
      newStr = newStr + char
     }
 }
console.log(`After removing duplicate characters in ${str} is :`, newStr)


// Check Whether a String Contains Special Characters

// Exchange the First and Last Character of the Entire String
var str = "We are learning JavaScript"
var newStr = ""
var s1 = ""
var n = str.length - 1
for(var char=1; char<n-1; char++) {
     s1 += str[char]
}
    newStr = str[n] + s1 + str[0]
    console.log(newStr)

// Convert All Characters to Uppercase
    var str = "hello world";
    var upper = str.toUpperCase();

    console.log(upper);
    
// Remove Newline Characters

// Split and Join a String

// Format a Floating-Point Number

// Convert Number Words into Digits

// Find the Position of a Word

// Count Occurrences of a Word

// Find the Least Frequent Character

// Find Words Greater Than a Given Length

// Get the First Four Characters

// Create a String Using the First Two and Last Two Characters

// Print the Mirror Image of a String

// Split a String on Vowels