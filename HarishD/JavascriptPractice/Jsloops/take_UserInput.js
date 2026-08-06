// we have to install npm package prompt-sync to take input from user
// npm install prompt-sync

const prompt = require("prompt-sync")();
const name = prompt("enter the values: ");
console.log("name:", name);