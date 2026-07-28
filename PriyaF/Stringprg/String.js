var s2 = "We are learning JavaScript"

function countVowels(s2) {
    var vowels = "aeiouAEIOU"
    var count = 0

    for (var ch of s2) {
        if (vowels.includes(ch)) {
            count++
        }
    }

    return count
}

console.log(countVowels(s2))