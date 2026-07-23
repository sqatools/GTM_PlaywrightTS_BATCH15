let marks = 75;

do {
    if (marks >= 90) {
        console.log("Grade A");
    } else if (marks >= 80) {
        console.log("Grade B");
    } else if (marks >= 70) {
        console.log("Grade C");
    } else if (marks >= 60) {
        console.log("Grade D");
    } else {
        console.log("Grade F");
    }
    break;
} while (true);

let num = 456;
let temp = Math.abs(num);
let count = 0;

while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

if (count === 3) {
    console.log("Three-digit number");
} else {
    console.log("Not a three-digit number");
}

let num = 4567;
let temp = Math.abs(num);
let count = 0;

while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

if (count === 4) {
    console.log("Four-digit number");
} else {
    console.log("Not a four-digit number");
}

let num = 18;

while (true) {
    if (num > 0 && num % 2 === 0) {
        console.log("Positive and Even");
    } else {
        console.log("Not Positive and Even");
    }
    break;
}

let age = 20;
let hasTicket = true;

while (true) {
    if (age >= 18 && hasTicket) {
        console.log("Entry Allowed");
    } else {
        console.log("Entry Denied");
    }
    break;
}
let username = "admin";

while (true) {
    if (username === "admin") {
        console.log("Welcome Admin");
    } else {
        console.log("Access Denied");
    }
    break;
}

let isLoggedIn = true;

while (true) {
    if (isLoggedIn) {
        console.log("User Logged In");
    } else {
        console.log("Please Login");
    }
    break;
}

let email = "abc@gmail.com";
let found = false;

for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
        found = true;
        break;
    }
}

if (found) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}

let mobile = "9876543210";
let count = 0;

for (let i = 0; i < mobile.length; i++) {
    count++;
}

if (count === 10) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}

let num = 15;

while (true) {
    if (num % 2 === 0 || num % 3 === 0) {
        console.log("Divisible by 2 or 3");
    } else {
        console.log("Not Divisible by 2 or 3");
    }
    break;
}