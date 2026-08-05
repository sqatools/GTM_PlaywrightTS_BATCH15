var str = "Rohit Virat Vaibhav Surya Rohit Abhishek Surya Virat";

var words = str.split(" ");
var result = "";

for (var i = 0; i < words.length; i++) {

    var found = false;

    for (var j = 0; j < i; j++) {

        if (words[i] == words[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        result += words[i] + " ";
    }
}

console.log(result);