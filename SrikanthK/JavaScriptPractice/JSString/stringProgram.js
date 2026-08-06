const str2 = 'Rohit Virat Vaibhav  Krishna  Ram Rohit Virat Vaibhav'; 

function removeDuplicatesFromGivenString(str) { 
    return [...new Set(str2.split(' '))].join(' '); 
 
}

console.log(removeDuplicatesFromGivenString(str2));


//***************** */


var str1 = 'Rohit Virat Vaibhav  Krishna  Ram Rohit Virat Vaibhav'; 
var output = "";
var words = str1.split(" ");

for (var words  of str1)  {

    if (output.includes(words)) {
        continue
}
else 
        output += words;

}

console.log(output)