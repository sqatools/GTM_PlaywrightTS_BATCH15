const prompt = require('prompt-sync')();
const num = parseInt(prompt("Enter a number:"));
for (let i = 1; i < num; i++) {
    console.log("number:", num)
}

