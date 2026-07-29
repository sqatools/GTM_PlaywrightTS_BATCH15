// we have install npm package to take input from user. 
// npm install prompt-sync

const prompt = require('prompt-sync')();
const name = prompt("Enter your value:")
console.log("name:", name)