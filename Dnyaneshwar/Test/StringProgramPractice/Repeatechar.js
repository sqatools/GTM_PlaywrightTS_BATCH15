var str = "Rohit Virat Vaibhav Abhishek Surya";

var result = "";

for (var i = 0; i < str.length; i++) {

    if (i == 0 || str[i - 1] == " ") {
        result += str[i];
    }

    result += str[i];
}

console.log(result);