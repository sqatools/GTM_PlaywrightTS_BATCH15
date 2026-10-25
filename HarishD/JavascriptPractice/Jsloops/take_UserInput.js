// we have to install npm package prompt-sync to take input from user
// npm install prompt-sync

import promptSync from "prompt-sync";

const prompt = promptSync();
const name = prompt("enter the values: ");
console.log("name:", name);