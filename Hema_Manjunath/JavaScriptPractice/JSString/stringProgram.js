function countVowels(str) {
    var vowels = "aeiouAEIOU";
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }

    return count;
}

var result = countVowels("Hello, good morning");
console.log("Number of vowels: " + result);




function firstLastTwo(str) {
    if (str.length < 2) {
        return "";
    }

    var first2 = str.substring(0, 2);
    var last2 = str.substring(str.length - 2, str.length);

    return first2 + last2;
}

console.log(firstLastTwo("JavaScript"));  // Jatt
console.log(firstLastTwo("Hi"));          // HiHi
console.log(firstLastTwo("A"));           // "" (empty string)

 
function longestString(strList) {
    var maxLength = 0;

    for (var i = 0; i < strList.length; i++) {
        if (strList[i].length > maxLength) {
            maxLength = strList[i].length;
        }
    }

    return maxLength;
}

console.log(longestString(["apple", "banana", "kiwi", "watermelon"]));  // 10
console.log(longestString(["cat", "dog"]));                              // 3
console.log(longestString([])); 










